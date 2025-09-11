<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        return [
            //
            'name'  => $this->faker->words(2, true), // e.g. "Red Chair"
            'image' => $this->faker->unique()->lexify('image_????') . '.jpg',
             'user_id'  => User::inRandomOrder()->first()->id ?? User::factory(),
             'price'  => $this->faker->numberBetween(1,40) * 100,
            'quantity' => $this->faker->numberBetween(1, 100),
        ];
    }
}
