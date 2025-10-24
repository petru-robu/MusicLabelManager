import Layout from "../Layouts/Layout"
import { Link } from "@inertiajs/react"

function Home({artists})
{
    console.log(artists);
    return <>
        <h1 className="title">Music Label Manager</h1>
        <p className="text-xl text-center">
            Explore music, artists, labels.    
        </p>

        <div>
            {artists.data.map(artist => (
                <div key={artist.id} className="p-4 border-b">
                    <p className="font-bold">Name: {artist.first_name} {artist.last_name}</p>
                    <p>Genre: {artist.genre}</p>
                    <Link href={`/artists/${artist.id}`} className="text-link">Read more...</Link>
                </div>
            ))}

            
        </div>

        <div className="py-12 px-4">
            {artists.links.map(link => (
                link.url ? (
                <Link
                    key={link.label}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`p-1 mx-1 ${link.active ? 'font-bold text-blue-500' : ''}`}
                />
                ) : (
                <span
                    key={link.label}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className="p-1 mx-1 text-gray-400"
                />
                )
            ))}
        </div>
    </>
}

Home.layout = page => <Layout children={page}/>

export default Home;