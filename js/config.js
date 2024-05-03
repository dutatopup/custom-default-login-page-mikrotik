const config = {
    loginMethod: {
      member: true,
      voucher: true,
      qrCode: false,
      default: "voucher", // member, voucher, qrCode
    },
    qrCodeScannerURL: "https://laksa19.github.io/myqr",
    expiredChecker: {
      active: true,
      URL: "https://voc.dutatopup.biz.id/mikhmon/status/status_mod.php?name=$(username)&session=PlayNET.ID",
      token: "69ee773d4xxxxxxxx:00628cdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
    prayTime: {
      // lihat di https://github.com/benangmerah/wilayah/blob/master/datasources/daftar-nama-daerah.csv
      // default menggunakan Provinsi Jakarta
      latitude: -7.733333,
      longtitude: 109,
    },
  };
  
  export default config;
  