import { Form, useNavigate, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";


export async function action({params}) {
   await eliminarCliente(params.clienteId)
   
    return redirect('/')

}

function Cliente({ cliente }) {

    const navigate = useNavigate()

    const { nombre, empresa, telefono, email, id } = cliente;

    return (
        <tr className="border-b">
            <td className='text-center space-y-2 p-6 '>
                <p className="text-xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>

            <td className='text-center space-y-2 p-6 '>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">TEL: </span>{telefono}</p>
            </td>

            <td className="p-6 flex gap-5 justify-center">
                <button onClick={() => navigate(`/clientes/${id}/editar`)} type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">
                    Editar
                </button>

                <Form 
                    method="post"
                    action={`/clientes/${id}/eliminar`}
                >
                    <button
                     type="submit" 
                     className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                     onSubmit={ (e) => {
                        if (!confirm('¿Deseas eliminar cliente?')) {
                            e.preventDefault();
                        }
                     } }
                     
                     >
                        Eliminar
                    </button>

                </Form>


            </td>
        </tr>
    )
}

export default Cliente