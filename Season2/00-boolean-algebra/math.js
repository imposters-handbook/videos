var AsciiTable = require('ascii-table');

const truthTable = (op) => {
  const tbl = new AsciiTable(`${op}`)
  tbl
    .setHeading("X", "Y", "Out")
    .addRow(0, 0, "00")
    .addRow(0, 1, "01")
    .addRow(1, 0, "01")
    .addRow(1, 1, "10");
  console.log(tbl.toString());
};

truthTable("ADDITION")