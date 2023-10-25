<?php

namespace App\Http\Livewire;

use Livewire\Component;

class ToggleTheme extends Component
{
    public $theme = 'dark';

    public function toggleTheme()
    {

    }

    public function render()
    {
        return view('livewire.toggle-theme');
    }
}
