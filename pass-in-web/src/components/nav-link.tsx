import { ComponentProps } from "react"

//extends ComponentProps<'a'> faz com que NavLinkProps possa receber todas as props de uma a sem precisa citar na interface
//children é o conteúdo de uma tag

interface NavLinkProps extends ComponentProps<'a'> {
    children: string
}

//{...props} vai representar a atribuição de todas essas prop sem precisar declarar como o {props.children}

export function NavLink(props: NavLinkProps){
    return(
        <a {...props} className="font-medium text-sm">
            {props.children}
        </a>
    )
}