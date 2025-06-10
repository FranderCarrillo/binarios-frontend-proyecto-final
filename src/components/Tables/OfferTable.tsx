// components/UserTable.tsx
import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'
import type { Offer } from '../../models/Offer/Offer'
import type { OfferSkill } from '../../models/OfferSkill/OfferSkill'

type Props = {
    data: Offer[]
}

export function OfferTable({ data }: Props) {
    const columns = React.useMemo<ColumnDef<Offer>[]>(
        () => [
        { accessorKey: 'job', header: 'Oferta' },
        { accessorKey: 'description', header: 'Descripcion' },
        //   {
        //     accessorKey: 'offerSkills',
        //     header: 'Habilidades',
        //     cell: info => {
        //         const offerSkills = info.getValue() as OfferSkill[]
        //         return (
        //         <ul className="list-disc pl-4">
        //             {offerSkills.map((os, idx) => (
        //             <li key={idx}>{os.skill?.name ?? 'Sin nombre'}</li>
        //             ))}
        //         </ul>
        //         )
        //     },
        //   },
        ],
        []
    )

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    if (!data || data.length === 0) {
        return <p className="text-center text-gray-500">No hay ofertas disponibles.</p>
    }
    return (
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-50">
            {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300"
                >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
            {table.getRowModel().rows.length === 0 ? (
            <tr>
                <td colSpan={columns.length} className="text-center p-4 text-gray-400">
                No hay datos para mostrar.
                </td>
            </tr>
            ) : (
            table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-gray-50 transition">
                {row.getVisibleCells().map(cell => (
                    <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b border-gray-200"
                    >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
                </tr>
            ))
            )}
        </tbody>
        </table>

    )
}
