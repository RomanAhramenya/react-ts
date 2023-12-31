



// описываем ситуацию когда мы отрисовываем или стрелку или иконку
// и вдруг передадим в пропсы и то и то, то ошибки не будет ..и отрисует оба элемента

interface CommonButtonProps { // определяем возможные типы
    num?: number;
    string?: string;

}

interface ArrowButtonProps extends CommonButtonProps { // один может быть другой нет
    num: number;
    string?: never
}
interface IconButtonProps extends CommonButtonProps {
    string: string;
    num?: never
}
type ButtonProps = ArrowButtonProps | IconButtonProps


const Button = (props: ButtonProps) => {
    const { num, string } = props

    return (
        <button >
            {string} {num}
        </button>
    )
}

export default Button