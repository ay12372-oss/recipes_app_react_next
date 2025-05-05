'use client';
import { useEffect, useState } from 'react';

export default function UseEffectRecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-2xl text-white font-bold mb-6">All Recipes (UseEfect Component)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe: any) => (
          <a
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
              <p className="text-sm text-gray-600">Rating: <span className="font-medium">{recipe.rating}</span></p>
              <p className="text-sm text-gray-500">{recipe.cuisine}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
