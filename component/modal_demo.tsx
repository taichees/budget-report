
import { useModal } from "react-hooks-use-modal";
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export const Modal_demo = ({ title, open_button_text, children }: any) => {
    const [Modal, open, close, isOpen] = useModal("__next", {
        preventScroll: true,
        focusTrapOptions: {
            clickOutsideDeactivates: true,
        },
    });
    return (
        <div className={styles.card}>
            <p className={inter.className}>Modal is Open? {isOpen ? "Yes" : "No"}</p>
            <button onClick={open}>{open_button_text}</button>
            <Modal>
                <div className={styles.card}>
                    <h1 className={inter.className}>{title}</h1>
                    {children}
                    <button onClick={close}>キャンセル</button>
                </div>
            </Modal>
        </div>
    );
};