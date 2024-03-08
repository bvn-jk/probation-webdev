## Login

- Status login dikelola di dalam file `src/context/authcontext`.
- Navbar akan disembunyikan jika pengguna belum login.

## Data Schedule
- Data pemilihan schedule dari page "PilihSchedule" sudah dapat disimpan di file `server/database.json`.
- Data akan tersimpan di sana, dan apabila user melakukan update jadwal lalu memencet tombol "Save", isi dari json tersebut juga akan ter-update
- Untuk mengakses data dalam json tersebut, jalankan perintah: `json-server --watch server/database.json --port 3005`.
