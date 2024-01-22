

export const SectionHeader = ({title, headerText}) => {
    return (
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-chilanka font-extrabold text-beige">{ title }</h2>
                    <p class="font-light font-chilanka text-white sm:text-xl dark:text-gray-400">{ headerText }</p>
            </div> 
    )
}