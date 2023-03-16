import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const MySwal = withReactContent(Swal);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Dylan",
                from_email: form.email,
                to_email: "dyl.vicente@gmail.com",
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                  setLoading(false);

                  MySwal.fire({
                    title: <strong>Merci pour votre message.</strong>,
                    html: <i>Je reviens vers vous le plus vite.</i>,
                    icon: 'success'
                  })  
                },
                (error) => {
                  setLoading(false);
                  console.error(error);
        
                  MySwal.fire({
                    title: <strong>Oups.</strong>,
                    html: <i>Une erreur est survenue. Veuillez réessayer.</i>,
                    icon: 'error'
                  })  
                }
              );  
    }


  return (
    <div id='contact' className='sm:scroll-mt-40 scroll-mt-20 mx-auto'>
        <div className='xl:mt-12 flex  justify-center gap-10 overflow-hidden max-w-7xl mx-auto sm:px-16 px-6 mt-10'>
            <div
                className='flex-[0.75] bg-gray-200 p-8 rounded-2xl'
            >
                <h3 className='text-black font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-4'>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className='flex flex-col'>
                        <span className='text-black font-medium mb-4'>Votre Nom</span>
                        <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nom"
                        required
                        className='bg-white py-4 px-6 placeholder:text-gray-600 text-black rounded-lg border-none font-medium'
                        >
                        </input>
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-black font-medium mb-4'>Votre Email</span>
                        <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Adresse Mail"
                        required
                        className='bg-white py-4 px-6 placeholder:text-gray-600 text-black rounded-lg border-none font-medium'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-black font-medium mb-4'>Votre Message</span>
                        <textarea
                        rows={6}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                        className='bg-white py-4 px-6 placeholder:text-gray-600 text-black rounded-lg border-none font-medium'
                        />
                    </label>

                    <button
                    type='submit'
                    className='bg-black py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-black'
                    >
                        {loading ? "Envoi..." : "Envoyer"}
                    </button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Contact ;