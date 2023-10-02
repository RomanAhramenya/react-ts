import { ReactElement, ReactNode } from "react"

interface ICustomButton {
    // children: ReactNode // классика позволяет передовать любое количество элементов
    // children: string // разрешена только строка...если обернуть в span , то будет ошибка
    children: ReactElement //
}

const CustomButton: React.FC<ICustomButton> = ({ children }) => {
    return (
        <button style={{ background: 'lightgreen', padding: '10px', border: 'none' }}>
            {children}
        </button>
    )
}

export default CustomButton
