


interface Props {
    children: React.ReactNode;
}

export default function ErrorMessage({ children }: Props) {
    return (
        <div className="text-center text-3xl bg-red-600 uppercase font-extrabold text-white p-2 my-4">
            {children}
        </div>
    )
}
