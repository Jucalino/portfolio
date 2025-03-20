type CMDIconProps = {
    icon: string
}

export const CMSIcon = ({ icon }: CMDIconProps) => {
    return(
        <div
            dangerouslySetInnerHTML={{
                __html: icon
            }}
        />
            
    )
} 