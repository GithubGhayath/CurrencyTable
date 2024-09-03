import styles from "../Style/CurrencyExchangeTable.module.css"; // Import the CSS module

// CurrencyExchangeTable Component
export default function CurrencyExchangeTable({ tableData, date }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="10">رقم السجل التجاري: 14008</th>
          </tr>
          <tr>
            <th colSpan="10">
              نشرة أسعار الصرف الزاجية الصادرة عن شركة دو للصرافة
            </th>
          </tr>
          <tr>
            <th colSpan="10">رقم 110 بتاريخ {date}</th>{" "}
            {/* Use the passed date */}
          </tr>
          <tr>
            <th colSpan="10">سارية اعتباراً من الساعة 10:00 حتى إشعار آخر</th>
          </tr>
          <tr>
            <th>الرقم التسلسلي</th>
            <th>رمز العملة</th>
            <th>العملة</th>
            <th>الحد الأدنى</th>
            <th>الحد الأقصى</th>
            <th>السعر الوسطي</th>
            <th>الهامش / قروش</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className={row.id % 2 === 0 ? styles.evenRow : ""}>
              <td>{row.id}</td>
              <td>{row.currencyCode}</td>
              <td>{row.currencyName}</td>
              <td>{row.minRate}</td>
              <td>{row.maxRate}</td>
              <td>{row.avgRate}</td>
              <td>{row.margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
