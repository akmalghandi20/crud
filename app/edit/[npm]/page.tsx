"use client";

import { detailData } from "@/app/models/mahasiswa";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function EditPage({ params }: { params: { npm: string } }) {
  //buat hook ("use state")
  //nilai awal tipe object
  const [getValue, setValue] = useState({});

  // buat hook "use state" untuk membaca nilai input
  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getProdi, setProdi] = useState("");
  const [getCheck, setCheck] = useState({});

  //buat fungsi untuk respon getData
  async function fetchData() {
    //isi nilai setValue
    setValue(await detailData(atob(decodeURIComponent(params.npm))));
  }
  //buat hook ("use effect")
  useEffect(() => {
    //panggil fetshData
    fetchData();
  }, []);

  const editData = async() => {
    
    // ternary operator
    getNPM == "" || getNama == "" || getProdi == ""
      ? [alert("Data Harus Lengkap")]
      : [
        alert("Ok")
        ];
    // alert(status[0]); harus menggunakan const status =
  };


  return (
    <>
      <title>Ubah Data Mahasiswa</title>

      {Object.values(getValue)?.map((data: any, index: number) => (
        <div key={index} className="grid grid-cols-12 gap-4 items-center">
          <div className=" col-span-1">
            <label htmlFor="">NPM</label>
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder="Isi NPM"
              maxLength={8}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              className="input input-bordered input-success w-full"
              defaultValue={data.npm}
              onChange={(e) => {
                setNPM(e.target.value);
                // getCheckData(e.target.value);
              }}
            />
          </div>
          <div className="col-start-1">
            <label htmlFor="">Nama</label>
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder="Isi Nama Mahasiswa"
              maxLength={100}
              onKeyPress={(e) => {
                if (!/[a-zA-Z\s]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              className="input input-bordered input-success w-full"
              defaultValue={data.nama}
              onChange={(e) => {
                setNama(e.target.value);
                // getCheckData(e.target.value);
              }}
            />
          </div>
          <div className="col-start-1">
            <label htmlFor="">Program Studi</label>
          </div>
          <div className="col-span-3">
            <select
              defaultValue={data.prodi}
              className="select select-success w-full"
              onChange={(e) => {
                setProdi(e.target.value);
                // getCheckData(e.target.value);
              }}
            >
              <option value={""} disabled>
                Pilih Program Studi
              </option>
              <option value={"Informatika"}>Informatika</option>
              <option value={"Sistem Informasi"}>Sistem Informasi</option>
              <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
              <option value={"Teknik Komputer"}>Teknik Komputer</option>
              <option value={"Teknik Elektro"}>Teknik Elektro</option>
              <option value={"Teknik Sipil"}>Teknik Sipil</option>
            </select>
          </div>
          <div className="col-start-2 col-span-3">
            <button className="btn btn-active btn-accent mr-5 w-36" onClick={editData}>
              Ubah
            </button>
            <Link href={"/"} className="btn btn-error ml-5 w-36">
              Batal
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
