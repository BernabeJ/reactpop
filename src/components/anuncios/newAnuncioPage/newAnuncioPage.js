import { useState } from "react";
import { Redirect } from "react-router";
import { Button, Textarea } from "../../commons";
import Photo from "../../commons/Photo";
import Layout from "../../layout/Layout";
import { createAnuncio } from "../service";
import './newAnuncioPage.css'


const MAX_CHARACTERS = 280;

function NewAnuncioPage({history}) {

    const [value, setValue] = useState({ content: '' });
    const [createdAnuncioId, setCreatedAnuncioId] = useState('');
    const [error, setError] = useState(null);
    const { content } = value;
    const handleChange = event => {
        setValue({content: event.target.value})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const createdAnuncio = await createAnuncio(value);
            setCreatedAnuncioId(createdAnuncio.id)
        } catch (error) {
            if (error.status === 401) {
                 return history.pushState('/login')
            }
            setError(error())
        }
    };
    const characters = `${value.content.length} / ${MAX_CHARACTERS}`

    if (createdAnuncioId) {  
        return <Redirect to={`/anuncios/${createdAnuncioId}`}/>
    }

    return (
        <Layout title="¿Que quieres Comprar o Vender?">
            <div className="newAnuncioPage bordered">
                <div className="left"><Photo /></div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                    <Textarea className="newAnuncioPage-textarea" placeholder="Hey! What´s up"
                    value={content}
                    onChange={handleChange}
                    maxLength= {MAX_CHARACTERS}
                    ></Textarea>
                        <div className="newAnuncioPage-footer">
                        <span className="newAnuncioPage-characters">{characters}</span>
                            <Button
                                type="submit"
                                className="newAnuncioPage-submit"
                                variant="primary"
                                disabled={!content}
                            >
                                Let´s go!
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default NewAnuncioPage;