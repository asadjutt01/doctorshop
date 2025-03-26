import React, { useState, useMemo, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaSearch } from "react-icons/fa";
// import Loader from "../Elements/Loader/Loader";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Loader from "../Loader/Loader";
// import { saveAs } from 'file-saver';
// import * as XLSX from "xlsx";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
interface RowData {
  id: number;
  [key: string]: any;
}

interface TableListProps {
  columns: TableColumn<RowData>[];
  data: RowData[];
  fileName?: string;
  filterButton?: boolean;
  onDelete?: (selectedRows: RowData[]) => void;
  onUpdate?: (selectedRows: RowData[]) => void;
}
type TextAlign = 'left' | 'right' | 'center' | 'justify';
const TableList: React.FC<TableListProps> = ({
  columns,
  data,
  fileName = 'table-data',
  filterButton,
  onDelete,
  onUpdate,
}) => {
  // console.log(data);

  const [loading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationPerPage, setPaginationPerPage] = useState(10);
  const [hideCols, setHideCols] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<RowData[]>([]);
  const [tableData, setTableData] = useState<RowData[]>(data);
  const [isColumnDropdownOpen, setIsColumnDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const col = columns && columns.map((item: any) => item.name);
  const filteredColumns = columns.filter(column => column.name !== 'Action');
  col.pop();
  const rowData = data;
  const filterdata = [
    { name: 'One Week' },
    { name: 'Two Week' },
    { name: 'Three Week' },
    { name: 'One Month' },
    { name: 'Two Months' },
    { name: 'Three Months' },
    { name: '12 Months' }
  ]
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  const capitalize = (text: any) => {
    return text
      .replace('_', ' ')
      .replace('-', ' ')
      .toLowerCase()
      .split(' ')
      .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  // const exportTable = (format: "csv" | "json" | "print" | "pdf" | "excel") => {

  //   let fileContent = "";

  //   if (format === "csv") {

  //     const headers = col
  //     console.log('headers>>>>>>>>>>>>', headers);
  //     fileContent =
  //       headers.join(",") +
  //       "\n" +
  //       data
  //         .map(row =>
  //           filteredColumns
  //             .map(col => {
  //               const value = col.selector ? col.selector(row) : "";
  //               return `"${value}"`; // Quote values to handle commas in data
  //             })
  //             .join(",")
  //         )
  //         .join("\n");


  //     // Trigger file download
  //     const blob = new Blob([fileContent], {
  //       type: "text/csv;charset=utf-8",
  //     });
  //     saveAs(blob, `${fileName}.${format}`);
  //   } else if (format === "json") {
  //     // Generate JSON content
  //     fileContent = JSON.stringify(data, null, 2);

  //     // Trigger file download
  //     const blob = new Blob([fileContent], {
  //       type: "application/json",
  //     });
  //     saveAs(blob, `${fileName}.${format}`);

  //   } else if (format === "print") {
  //     const headers = col.map(col => col);
  //     const rows = data.map(row =>
  //       filteredColumns.map(col => (col.selector ? col.selector(row) : ""))
  //     );

  //     const printWindow = window.open("", "_blank");
  //     if (!printWindow) {
  //       alert("Unable to open print window. Please check your browser settings.");
  //       return;
  //     }

  //     printWindow.document.write("<html><head><title>Table Data</title></head><body>");
  //     printWindow.document.write("<table border='1' style='border-collapse: collapse; width: 100%;'>");
  //     printWindow.document.write("<thead><tr>");
  //     headers.forEach(header => {
  //       printWindow.document.write(`<th>${header}</th>`);
  //     });
  //     printWindow.document.write("</tr></thead><tbody>");
  //     rows.forEach(row => {
  //       printWindow.document.write("<tr>");
  //       row.forEach(cell => {
  //         printWindow.document.write(`<td>${cell}</td>`);
  //       });
  //       printWindow.document.write("</tr>");
  //     });
  //     printWindow.document.write("</tbody></table></body></html>");
  //     printWindow.document.close();
  //     printWindow.print();
  //   } else if (format === "pdf") {
  //     const headers = col.map(col => col);
  //     const rows = data.map(row =>
  //       filteredColumns.map(col => (col.selector ? col.selector(row) : ""))
  //     );

  //     const doc = new jsPDF();
  //     doc.text(fileName, 14, 10);
  //     autoTable(doc, {
  //       head: [headers],
  //       body: rows,
  //     });

  //     doc.save(`${fileName}.pdf`);
  //   } else if (format === "excel") {
  //     // Extract header names from the 'columns' array
  //     console.log('downloading Excel');
  //     const headers = col.map(col => col);

  //     // Create rows from 'data' and 'columns'
  //     const rows = data.map(row =>
  //       filteredColumns.map(col => (col.selector ? col.selector(row) : ""))
  //     );

  //     // Create Excel worksheet
  //     const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);

  //     // Create a new workbook and append the worksheet
  //     const workbook = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(workbook, worksheet, fileName);

  //     // Trigger Excel file download
  //     XLSX.writeFile(workbook, `${fileName}.xlsx`);
  //   }
  // };
  // const handleDownloadExcel = () => {
  //   // Extract header names from the 'columns' array
  //   console.log('downloading Excel');
  //   const headers = col.map(col => col);

  //   // Create rows from 'data' and 'columns'
  //   const rows = data.map(row =>
  //     filteredColumns.map(col => (col.selector ? col.selector(row) : ""))
  //   );

  //   // Create Excel worksheet
  //   const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);

  //   // Create a new workbook and append the worksheet
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

  //   // Trigger Excel file download
  //   XLSX.writeFile(workbook, "table-data.xlsx");
  // }

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const filteredData = useMemo(() => {
    if (!searchText) return tableData;

    // Search across all columns for each row
    return tableData.filter((row) =>
      Object.values(row).some((value) =>
        value?.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, tableData]);

  // console.log("Filtered Data:", filteredData);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * paginationPerPage;
    return filteredData?.slice(startIndex, startIndex + paginationPerPage);
  }, [filteredData, currentPage, paginationPerPage]);
  // console.log("Filtered Data:", filteredData);
  // console.log("Paginated Data:", paginatedData);

  const visibleColumns = useMemo(
    () => columns.filter((col: any) => !hideCols.includes(col.name || "")),
    [columns, hideCols]
  );

  const handleColumnToggle = (columnName: string) => {
    if (columnName === "Show All") {
      setHideCols([]);
    } else {
      setHideCols((prevHideCols) =>
        prevHideCols.includes(columnName)
          ? prevHideCols.filter((col) => col !== columnName)
          : [...prevHideCols, columnName]
      );
    }
  };

  const handleRowSelected = ({ selectedRows }: { selectedRows: RowData[] }) => {
    setSelectedRows(selectedRows);
  };

  const handleDeleteSelected = () => {
    if (onDelete) onDelete(selectedRows);
    setTableData((prev) => prev.filter((row) => !selectedRows.includes(row)));
    setSelectedRows([]);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredData?.length / paginationPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // marginTop: "20px",
          padding: "16px 10px"
        }}
        className="table_rowsPerPage"
      >
        <div className="" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: "20px",
        }} >
          <label className="table_rowsPerPage_text" htmlFor="rowsPerPage">Rows per page:</label>
          <select
            id="rowsPerPage"
            value={paginationPerPage}
            onChange={(e) => setPaginationPerPage(Number(e.target.value))}
            style={{
              marginLeft: "8px",
              color: "#000000",
            }}
            className="table_rowsPerPage_select"
          >
            {[10, 20, 30].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}>
          {currentPage > 1 && (
            <button className="table-paggination-button"
              // style={paginationButtonStyle}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <MdOutlineKeyboardDoubleArrowLeft width={12} height={12} />
            </button>
          )}

          {pageNumbers.map((num) => (
            <button
              key={num}
              style={paginationButtonStyle}
              // currentPage
              className={`table_rowsPerPage ${num === currentPage ? 'table-paggination-button-active fw-bold' : 'text-black'}`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              // style={paginationButtonStyle}
              className="table-paggination-button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              <MdOutlineKeyboardDoubleArrowRight width={12} height={12} />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        // padding: "20px",
        // fontFamily: "Arial, sans-serif",
      }}
      className="panel-tabel"
    >
      {loading ? (
        <div className="flex justify-center min-h-[30vh] items-center w-full">
          {/* <Loader /> */} <Loader />
        </div>
      ) : (
        <>

          <div className="flex justify-between">
            {/* <!-- Search Input --> */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="table-search-input"
              />
              {/* <!-- Search Icon --> */}
              {/* <svg
                className="absolute left-2 top-2.5 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg> */}
              <IoSearch className="table-search-icon" />
            </div>
          </div>
          <div className="table-with-paggination-container">
            <DataTable
              columns={visibleColumns}
              data={paginatedData}
              highlightOnHover
              customStyles={tableStyles}
              // selectableRows
              // expandableRows
              dense
              fixedHeader
            // onSelectedRowsChange={handleRowSelected}
            />
            {renderPagination()}
          </div>





        </>
      )}
    </div>
  );
};

const paginationButtonStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  // color: "black",
  // fontWeight: "bold",
  fontSize: "13px",
  gap: "5px",
};

// const tableStyles = {
//   headRow: {
//     style: {
//       // background: "linear-gradient(92deg, #1AA5DE 0%, #0073A1 100%)",
//       background: "#F7F7F9",
//       color: "#000000",
//       fontWeight: "500",
//       textAlign: "center",
//       fontSize: "16px",
//       padding: "14px 0px",
//     },
//   },
//   rows: {
//     style: {
//       fontSize: "13px",
//       padding: "12px 0px",
//       borderBottom: "1px solid #707070 !important",
//     },
//   },
// };
const tableStyles = {
  headRow: {
    style: {
      background: "#F7F7F9",
      color: "#000000",
      fontWeight: "500",
      textAlign: "center" as TextAlign,  // Explicitly cast to TextAlign type
      fontSize: "16px",
      padding: "14px 0px",
    },
  },
  rows: {
    style: {
      fontSize: "13px",
      padding: "12px 0px",
      borderBottom: "1px solid #707070 !important",  // Ensure this is a string value
    },
  },
};
export default TableList;