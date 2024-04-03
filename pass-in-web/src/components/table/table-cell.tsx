import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<'td'>{}

//twmerge vai permitir juntar as classes definidas aqui com as que forem acrescentadas onde esta sendo usado o componente (props.className)

export function TableCell(props: TableCellProps){
    return(
        <td {...props} className={twMerge('py-3 px-4 text-sm text-zinc-300', props.className)}></td>
    )
}