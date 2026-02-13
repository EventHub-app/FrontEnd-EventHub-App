import React from 'react'
import Input from '../components/input/Input'
import logo from "@/assets/celebration_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import Button from '../components/button/Button'
import useLogin from '../hooks/useLogin'
export default function LoginPage() {
    const { handleChangfeValue,
        formData,
        Onsubmit
    } = useLogin()
    return (
        <div
            className='bg-main min-h-svh flex  flex-col items-center justify-center  '
        >
            <form className='bg-white rounded w-11/12 p-5 md:w-8/12 lg:w-5/12 xl:w-4/12' onSubmit={Onsubmit}>
                <div className='flex flex-col items-center '>
                    <img src={logo}
                        className='text-main w-15'
                        alt="" /> <h1
                            className='text-4xl
                       font-extrabold
                      '
                        >
                        EventHub
                    </h1>
                    <p className='text-zinc-600 text-center w-100 mt-4'>Lo adipisicing elit. Est aliquam in distinctio quidem eligendi sint velit rerum reiciendis inventore.</p>
                </div>
                <div className='mt-5'>
                    <label htmlFor="">Email</label>
                    <Input type={'email'}
                        placeholder={'email@exemplo.com'}
                        name={"email"}
                        value={formData.email}
                        onchage={handleChangfeValue}
                        className={' border border-zinc-400  w-full  rounded p-3 mt-2 outline-main'} required={true} />
                </div>
                <div className='mt-5'>
                    <label htmlFor="">Palavra-passe</label>
                    <Input type={'password'}
                        placeholder={'palavra-passe'}
                        name={'password'}
                        className={' border border-zinc-400  w-full  rounded p-3 mt-2 outline-main'}
                        required={true}
                        value={formData.password}
                        onchage={handleChangfeValue}
                    />
                </div>
                <div className='mt-5'>
                    <Button text={'Entrar'} Onclick={undefined} type={undefined} className={'bg-main p-4 cursor-pointer  text-white rounded w-full '} />
                </div>
            </form>
        </div>
    )
}


