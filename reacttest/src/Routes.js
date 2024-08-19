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
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/name-age/" element={<NameAges />} />
      <Route path="/name-age/:id" element={<NameAgeDetail />} />
      <Route path="/name-age/create" element={<CreateNameAge />} />
      <Route path="/name-age/create-confirm" element={<CreateNameAgeConfirm />} />
      <Route path="/name-age/create-succeeded" element={<CreateNameAgeSucceeded />} />
      <Route path="/name-age/create-failed" element={<CreateNameAgeFailed />} />

      <Route path="/name-age/update" element={<UpdateNameAge />} />
      <Route path="/name-age/update-confirm" element={<UpdateNameAgeConfirm />} />
      <Route path="/name-age/update-succeeded" element={<UpdateNameAgeSucceeded />} />
      <Route path="/name-age/update-failed" element={<UpdateNameAgeFailed />} />

      <Route path="/name-age/delete" element={<DeleteNameAgeConfirm />} />
      <Route path="/name-age/delete-succeeded" element={<DeleteNameAgeSucceeded />} />
      <Route path="/name-age/delete-failed" element={<DeleteNameAgeFailed />} />

    </Routes>
  );
}