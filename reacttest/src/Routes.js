import { Routes, Route } from "react-router-dom";
import App from './App';
import { NameAges } from './NameAges';
import { NameAgeDetail } from "./NameAges";
import {
  CreateNameAge, CreateNameAgeConfirm, UpdateNameAge, UpdateNameAgeConfirm, DeleteNameAgeConfirm,
  CreateNameAgeSucceeded, CreateNameAgeFailed, UpdateNameAgeSucceeded, UpdateNameAgeFailed,
  DeleteNameAgeSucceeded, DeleteNameAgeFailed
} from "./CreateNameAge";

export default function AppRoutes() {
  return (
    // ページのルーティングを行う要素
    <Routes>
      {/* "/"にアクセスしたときAppを表示する */}
      <Route path="/" element={<App />} />

      {/* "/name-age/"にアクセスしたときNameAgesを表示する */}
      <Route path="/name-age/" element={<NameAges />} />
      {/* "/name-age/:id"にアクセスしたとき:idをパラメータとしてNameAgeDetailを表示する */}
      <Route path="/name-age/:id" element={<NameAgeDetail />} />
      {/* "/name-age/create"にアクセスしたときCreateNameAgeを表示する */}
      <Route path="/name-age/create" element={<CreateNameAge />} />
      {/* "/name-age/create-confirm"にアクセスしたときCreateNameAgeConfirmを表示する */}
      <Route path="/name-age/create-confirm" element={<CreateNameAgeConfirm />} />
      {/* "/name-age/create-succeeded"にアクセスしたときCreateNameAgeSucceededを表示する */}
      <Route path="/name-age/create-succeeded" element={<CreateNameAgeSucceeded />} />
      {/* "/name-age/create-failed"にアクセスしたときCreateNameAgeFailedを表示する */}
      <Route path="/name-age/create-failed" element={<CreateNameAgeFailed />} />

      {/* "/name-age/update"にアクセスしたときUpdateNameAgeを表示する */}
      <Route path="/name-age/update" element={<UpdateNameAge />} />
      {/* "/name-age/update-confirm"にアクセスしたときUpdateNameAgeConfirmを表示する */}
      <Route path="/name-age/update-confirm" element={<UpdateNameAgeConfirm />} />
      {/* "/name-age/update-succeeded"にアクセスしたときUpdateNameAgeSucceededを表示する */}
      <Route path="/name-age/update-succeeded" element={<UpdateNameAgeSucceeded />} />
      {/* "/name-age/update-failed"にアクセスしたときUpdateNameAgeFailedを表示する */}
      <Route path="/name-age/update-failed" element={<UpdateNameAgeFailed />} />

      {/* "/name-age/delete"にアクセスしたときDeleteNameAgeConfirmを表示する */}
      <Route path="/name-age/delete" element={<DeleteNameAgeConfirm />} />
      {/* "/name-age/delete-succeeded"にアクセスしたときDeleteNameAgeSucceededを表示する */}
      <Route path="/name-age/delete-succeeded" element={<DeleteNameAgeSucceeded />} />
      {/* "/name-age/delete-failed"にアクセスしたときDeleteNameAgeFailedを表示する */}
      <Route path="/name-age/delete-failed" element={<DeleteNameAgeFailed />} />

    </Routes>
  );
}