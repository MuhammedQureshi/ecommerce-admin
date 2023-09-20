export default function AuthLayout ({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center bg-[url('https://images.unsplash.com/photo-1621947081720-86970823b77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')] bg-no-repeat bg-cover justify-center h-full">
            {children}
        </div>
    )
}