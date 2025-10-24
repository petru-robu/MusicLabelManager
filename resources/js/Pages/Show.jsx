import { useForm } from "@inertiajs/react"

export default function Show({ artist }) {

    const { delete: destroy } = useForm();

    function submit(e){
        e.preventDefault();
        destroy(`/artists/${artist.id}`);
    }

    return (
        <>
            <h1 className="title">Resource show</h1>
            <div className="p-4 text-center">
                <p className="font-bold">Name: {artist.first_name} {artist.last_name}</p>
                <p>Genre: {artist.genre}</p>
            </div>

            <div className="flex items-center justify-center gap-2">
                <form onSubmit={submit}>
                    <button className="bg-red-500 rounded-md 
                    text-sm px-4 py-1 text-white">
                        Delete
                    </button>
                </form>
            </div>
        </>
    )
}  