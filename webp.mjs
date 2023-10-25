import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import util from 'util';
import path from 'path';

// Function to format file size in kilobytes (kB)
function formatFileSize(bytes) {
  return (bytes / 1024).toFixed(2) + ' kB';
}

(async () => {
  // Input directory containing the original images
  const inputDir = 'public/images';

  try {
    const files = await imagemin([`${inputDir}/**/*.{jpg,png}`], {
      // Notice that we're not specifying a destination. Instead, we'll handle that manually below.
      plugins: [
        imageminWebp({ quality: 80 })
      ]
    });

    // Log information about the images optimized and the size saved
    var imageOptimized = 0;
    for (const file of files) {
      imageOptimized++;
      const inputPath = file.sourcePath.replace(/\\/g, '/');
      const outputPath = inputPath.replace(/\.(jpg|png)$/, '.webp'); // Replace the file extension with '.webp'
      const originalSize = fs.statSync(file.sourcePath).size;

      await fs.promises.writeFile(outputPath, file.data); // Write the converted data to the new outputPath

      const convertedSize = file.data.length;
      var percentageSaved = ((originalSize - convertedSize) / originalSize) * 100;
      percentageSaved = Math.round((percentageSaved + Number.EPSILON) * 100) / 100;
      console.log(`Image optimized: ${inputPath}`);
      console.log(`Original size: ${formatFileSize(originalSize)}`);
      console.log(`Output size: ${formatFileSize(convertedSize)}`);
      console.log(`Size saved: ${formatFileSize(originalSize - convertedSize)} (${percentageSaved}%)`);
      console.log(`Output file: ${outputPath}`);
      console.log('---------------------------------------');
    }

    console.log(`${imageOptimized} images optimized.`);
  } catch (error) {
    console.error('Error occurred while optimizing images:', error);
  }
})();