// app/recipes/[id]/page.tsx
export default async function RecipeDetail({ params }: { params: { id: string } }) {
    const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
    const recipe = await res.json();
  
    return (
        <div className="bg-gray-900 min-h-screen text-white px-6 py-8">
          <a href="/recipes" className="text-sm text-blue-400 hover:underline mb-4 inline-block">Go Back</a>
      
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full max-w-4xl mx-auto rounded-md shadow-md mb-6"
          />
      
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-1">{recipe.name}</h1>
            <p className="text-lg text-gray-300 mb-6">{recipe.cuisine}</p>
      
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
      
            <div>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-200">
                {recipe.instructions.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      );
      
  }
  