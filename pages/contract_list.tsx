import { NextPage } from 'next'
import { getRequestInstance } from "../modules/request";
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Modal_demo } from './component/modal_demo'

const inter = Inter({ subsets: ['latin'] })

const Page: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>契約一覧</title>
                <meta name="description" content="契約の一覧表示" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <hr></hr>
                <h1 className={inter.className}>
                    明細の登録はこちら
                </h1>
                <Modal_demo title="商品" open_button_text="新規登録">

                    <p className={inter.className}>This is a customizable modal.</p>
                    <Modal_demo title="品目" open_button_text="品目選択">

                        <p className={inter.className}>This is a customizable modal.</p>
                    </Modal_demo>
                </Modal_demo>
            </main>
        </>
    )
}
Page.getInitialProps = async (ctx: any) => {
    const request = getRequestInstance(Boolean(ctx.req));
    const res = await request.get("data").then(res => res);
    return res.data;
}
export default Page