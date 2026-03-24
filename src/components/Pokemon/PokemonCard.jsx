import Card from '../Cards/Card';
import CardHeader from '../Cards/CardHeader';
import CardBody from '../Cards/CardBody';
import CardFooter from '../Cards/CardFooter';
const PokemonCard = (
    {
        data
    }
)=>{
    return (
        <Card
                cardHeader={(
                  <CardHeader>
                    <div className="flex flex-col justify-center items-center w-full bg-green-600 p-2">
                      <img className="w-24 h-24 translate-y-1/3 object-cover rounded-full shadow-2xl bg-white" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.codigo}.png`} />
                    </div>
                  </CardHeader>
                )}
                cardBody={(
                  <CardBody>
                    <section className="mt-8 px-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{`#${data.codigo}`}</span>
                        <span className="flex gap-2">
                          <span className="inline-block px-3 py-2 bg-green-500 text-white rounded-sm">Grass</span>
                          <span className="inline-block px-3 py-2 bg-purple-400 text-white rounded-sm">Poison</span>
                        </span>
                      </div>
                      <div>
                        <h2 className="text-center py-4 text-2xl font-bold">{data.name}</h2>
                      </div>
                      <div className="flex rounded-xl bg-teal-100 px-2 py-4 justify-center w-full">
                        <span className="flex flex-1 flex-col items-center">
                          <span className="text-red-800 font-bold">HP</span>
                          <span>{data.hp}</span>
                        </span>
                        <span className="flex flex-1 flex-col  items-center">
                          <span className="text-red-800 font-bold">ATK</span>
                          <span>{data.atk}</span>
                        </span>
                        <span className="flex flex-1 flex-col  items-center">
                          <span className="text-blue-600 font-bold">DEF</span>
                          <span>{data.def}</span>
                        </span>
                      </div>
                    </section>
                  </CardBody>
                )}
                cardFooter={(
                  <CardFooter>
                    <section className="flex">
                      <button className="flex-1 mx-4 mt-8 mb-2 px-4 py-3 bg-green-600 text-white font-bold rounded-sm">Detalles</button>
                    </section>
                  </CardFooter>
                )}
              />
    );
}

export default PokemonCard;