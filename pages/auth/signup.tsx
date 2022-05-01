import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Auth.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterSchema} from "../../utils/validation";
import Link from 'next/link';
import {yupResolver} from '@hookform/resolvers/yup';

type RegisterInputsType = {
    name: string,
    email: string,
    password: string,
};

const SignUp: NextPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<RegisterInputsType>({
        resolver: yupResolver(RegisterSchema)
    });

    const onSubmit: SubmitHandler<RegisterInputsType> = data => {
        console.log(data);
    }


    return (
        <div>
            <Head>
                <title>Регистрация | Авторизация</title>
                <meta name="description" content="Страница регистрации"/>
            </Head>

            <main className={styles.auth}>
                <h1 className={styles.title}>Регистрация</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.input} {...register("name")} placeholder="Your Name"/>
                    <p className={styles.inputError}>{errors.name?.message}</p>

                    <input className={styles.input} {...register("email")} placeholder="Email"/>
                    <p className={styles.inputError}>{errors.email?.message}</p>

                    <input className={styles.input} {...register("password")} placeholder="Password"/>
                    <p className={styles.inputError}>{errors.password?.message}</p>

                    <button className={styles.submitButton} type={"submit"}>Регистрация</button>
                    <Link href={"/auth/signin"}>
                        <a className={styles.link}>Вход</a>
                    </Link>
                </form>
            </main>
        </div>
    )
}

export default SignUp
