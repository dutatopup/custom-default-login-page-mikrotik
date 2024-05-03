const config = {
    loginMethod: {
      member: true,
      voucher: true,
      qrCode: true,
      default: "voucher", // member, voucher, qrCode
    },
    qrCodeScannerURL: "https://laksa19.github.io/myqr",
    expiredChecker: {
      active: true,
      URL: "https://domain.com/status/status.php?name=$(username)&session=Session012",
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
  
