import CurrencyExchangeTable from "./Components/CurrencyExchangeTable"; // Import the child component
import styles from "./Style/App.module.css"; // Import the CSS module
import { useState } from "react";
// Parent Component
const App = () => {
  // State to hold the dynamic table data
  const [tableData, setTableData] = useState([
    {
      id: 1,
      currencyCode: "USD",
      currencyName: "الدولار الأمريكي",
      minRate: "13600.00",
      maxRate: "13736.00",
      avgRate: "13668.00",
      margin: "136.000",
    },
    {
      id: 2,
      currencyCode: "EUR",
      currencyName: "اليورو",
      minRate: "14542.48",
      maxRate: "14673.36",
      avgRate: "14607.92",
      margin: "130.880",
    },
    {
      id: 3,
      currencyCode: "GBP",
      currencyName: "الجنيه الإسترليني",
      minRate: "17184.82",
      maxRate: "17338.93",
      avgRate: "17261.61",
      margin: "154.650",
    },
    {
      id: 4,
      currencyCode: "JPY",
      currencyName: "الين الياباني",
      minRate: "84.82",
      maxRate: "85.58",
      avgRate: "85.20",
      margin: "0.760",
    },
    {
      id: 5,
      currencyCode: "CHF",
      currencyName: "الفرنك السويسري",
      minRate: "15165.03",
      maxRate: "15301.51",
      avgRate: "15233.27",
      margin: "136.480",
    },
    {
      id: 6,
      currencyCode: "CAD",
      currencyName: "الدولار الكندي",
      minRate: "9931.00",
      maxRate: "10020.37",
      avgRate: "9975.69",
      margin: "89.370",
    },
    {
      id: 7,
      currencyCode: "DKK",
      currencyName: "الكورون الدانماركي",
      minRate: "1949.77",
      maxRate: "1967.31",
      avgRate: "1958.54",
      margin: "17.540",
    },
    {
      id: 8,
      currencyCode: "SEK",
      currencyName: "الكورون السويدي",
      minRate: "1287.33",
      maxRate: "1298.91",
      avgRate: "1293.12",
      margin: "11.580",
    },
    {
      id: 9,
      currencyCode: "NOK",
      currencyName: "الكورون النرويجي",
      minRate: "1274.97",
      maxRate: "1286.44",
      avgRate: "1280.71",
      margin: "11.470",
    },
    {
      id: 10,
      currencyCode: "KWD",
      currencyName: "الدينار الكويتي/ جديد",
      minRate: "44328.56",
      maxRate: "44727.51",
      avgRate: "44528.04",
      margin: "398.950",
    },
    {
      id: 11,
      currencyCode: "SAR",
      currencyName: "الريال السعودي",
      minRate: "3625.17",
      maxRate: "3657.79",
      avgRate: "3641.48",
      margin: "32.620",
    },
    {
      id: 12,
      currencyCode: "JOD",
      currencyName: "الدينار الأردني",
      minRate: "19193.07",
      maxRate: "19362.78",
      avgRate: "19276.43",
      margin: "172.710",
    },
    {
      id: 13,
      currencyCode: "BHD",
      currencyName: "الدينار البحريني",
      minRate: "36064.71",
      maxRate: "36389.29",
      avgRate: "36227.00",
      margin: "324.580",
    },
    {
      id: 14,
      currencyCode: "AED",
      currencyName: "الدرهم الإماراتي",
      minRate: "3703.20",
      maxRate: "3736.52",
      avgRate: "3719.86",
      margin: "33.320",
    },
    {
      id: 15,
      currencyCode: "QAR",
      currencyName: "الريال القطري/ جديد",
      minRate: "3735.24",
      maxRate: "3768.85",
      avgRate: "3752.05",
      margin: "33.610",
    },
    {
      id: 16,
      currencyCode: "OMR",
      currencyName: "الريال العماني",
      minRate: "35324.68",
      maxRate: "35642.06",
      avgRate: "35483.64",
      margin: "317.920",
    },
    {
      id: 17,
      currencyCode: "EGP",
      currencyName: "الجنيه المصري",
      minRate: "283.14",
      maxRate: "285.68",
      avgRate: "284.41",
      margin: "2.540",
    },
    {
      id: 18,
      currencyCode: "AUD",
      currencyName: "الدولار الأسترالي",
      minRate: "9065.08",
      maxRate: "9166.96",
      avgRate: "9116.02",
      margin: "81.580",
    },
    {
      id: 19,
      currencyCode: "CNY",
      currencyName: "اليوان الصيني",
      minRate: "1871.05",
      maxRate: "1887.88",
      avgRate: "1879.47",
      margin: "16.830",
    },
    {
      id: 20,
      currencyCode: "RUB",
      currencyName: "الروبل الروسي",
      minRate: "154.41",
      maxRate: "155.79",
      avgRate: "155.10",
      margin: "1.380",
    },
  ]);

  // State for date
  const [date, setDate] = useState("2024/06/27"); // Default date

  // Function to handle input change for table data
  const handleInputChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  // Function to handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>تحديث جدول أسعار الصرف</h1>

      {/* Input fields for each row in the table */}
      {tableData.map((row, index) => (
        <div key={row.id} className={styles.formSection}>
          <h3>تحديث البيانات للعملة: {row.currencyName}</h3>
          <label className={styles.currencyLabel}>
            الحد الأدنى:
            <input
              type="text"
              value={row.minRate}
              onChange={(e) =>
                handleInputChange(index, "minRate", e.target.value)
              }
              className={styles.currencyInput}
            />
          </label>
          <label className={styles.currencyLabel}>
            الحد الأقصى:
            <input
              type="text"
              value={row.maxRate}
              onChange={(e) =>
                handleInputChange(index, "maxRate", e.target.value)
              }
              className={styles.currencyInput}
            />
          </label>
          <label className={styles.currencyLabel}>
            السعر الوسطي:
            <input
              type="text"
              value={row.avgRate}
              onChange={(e) =>
                handleInputChange(index, "avgRate", e.target.value)
              }
              className={styles.currencyInput}
            />
          </label>
          <label className={styles.currencyLabel}>
            الهامش / قروش:
            <input
              type="text"
              value={row.margin}
              onChange={(e) =>
                handleInputChange(index, "margin", e.target.value)
              }
              className={styles.currencyInput}
            />
          </label>
        </div>
      ))}

      {/* Input field for date */}
      <div className={styles.dateInputSection}>
        <label className={styles.dateLabel}>
          تاريخ النشرة:
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className={styles.dateInput}
          />
        </label>
      </div>

      {/* Pass the updated table data and date to the child component */}
      <CurrencyExchangeTable tableData={tableData} date={date} />
    </div>
  );
};

export default App;
