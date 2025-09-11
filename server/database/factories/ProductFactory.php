<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        // $table->string('name');
        //     $table->string('image');
        //     $table->foreignId('user_id');
        //     $table->integer('quantity');
        //     $table->timestamps();
        return [
            //
            "name" => fake()->name(),
            "image" => fake()->name(),
            "user_id" => fake()->name(),
            "quantity" => fake()->name(),
        ];
    }
}
