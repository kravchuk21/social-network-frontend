import type {NextPage} from 'next'
import Head from 'next/head'
import {SubmitHandler, useForm} from 'react-hook-form';
import styles from '../../styles/Auth.module.css'
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginSchema} from "../../utils/validation";
import Link from "next/link";

type LoginInputsType = {
    email: string,
    password: string,
};

const SignIn: NextPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginInputsType>({
        resolver: yupResolver(LoginSchema)
    });

    const onSubmit: SubmitHandler<LoginInputsType> = data => {
        console.log(data);
    }

    return (
        <div>
            <Head>
                <title>Вход | Авторизация</title>
                <meta name="description" content="Страница входа в аккаунт"/>
            </Head>

            <main className={styles.auth}>
                <h1 className={styles.title}>Вход</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.input} {...register("email")} placeholder="Email"/>
                    <p className={styles.inputError}>{errors.email?.message}</p>

                    <input className={styles.input} {...register("password")} placeholder="Password"/>
                    <p className={styles.inputError}>{errors.password?.message}</p>

                    <button className={styles.submitButton} type={"submit"}>Вход</button>
                    <Link href={"/auth/signup"}>
                        <a className={styles.link}>Регистрация</a>
                    </Link>
                </form>
            </main>
        </div>
    )
}

export default SignIn
