/**
 * Componente de tabla reutilizable
 */

import React from 'react';
import { clsx } from 'clsx';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={clsx('min-w-full divide-y divide-secondary-200', className)} {...props}>
        {children}
      </table>
    </div>
  );
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableHeader({ children, className, ...props }: TableHeaderProps) {
  return (
    <thead className={clsx('bg-secondary-50', className)} {...props}>
      {children}
    </thead>
  );
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody className={clsx('bg-white divide-y divide-secondary-200', className)} {...props}>
      {children}
    </tbody>
  );
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  hoverable?: boolean;
}

export function TableRow({ children, hoverable = true, className, ...props }: TableRowProps) {
  return (
    <tr
      className={clsx(hoverable && 'hover:bg-secondary-50 transition-colors', className)}
      {...props}
    >
      {children}
    </tr>
  );
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <th
      className={clsx(
        'px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider',
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td className={clsx('px-6 py-4 whitespace-nowrap text-sm text-secondary-900', className)} {...props}>
      {children}
    </td>
  );
}