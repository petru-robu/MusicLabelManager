import Layout from "../Layouts/Layout"
import { useForm } from "@inertiajs/react"

function Create() {
    const { data, setData, post, errors, processing} = useForm({
        first_name: "First Name",
        last_name: "Last Name",
        genre: "Genre"
    })

    function submit(e) {
        e.preventDefault();
        post("/artists");
    }

    console.log(errors);    

    return (
        <>
            <h1 className="title"> Create a new artist! </h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea 
                        rows="1" 
                        value={data.first_name} 
                        onChange={(e) => setData('first_name', e.target.value)}
                        className={`mt-2 ${errors.first_name ? '!ring-red-500' : ''}`}>
                    </textarea>
                    <textarea 
                        rows="1" 
                        value={data.last_name} 
                        onChange={(e) => setData('last_name', e.target.value)}
                        className={`mt-2 ${errors.last_name ? '!ring-red-500' : ''}`}>
                    </textarea>

                    <textarea 
                        rows="1" 
                        value={data.genre} 
                        onChange={(e) => setData('genre', e.target.value)}
                        className={`mt-2 ${errors.genre ? '!ring-red-500' : ''}`}>
                    </textarea>

                    {errors.first_name && <p className="error">{errors.first_name}</p>}
                    {errors.last_name && <p className="error">{errors.last_name}</p>}
                    {errors.genre && <p className="error">{errors.genre}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>Create Artist</button>
                </form>
            </div> 

        </>
    )
}

Create.layout = page => <Layout children={page}/>
export default Create;