import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import PatientsPage from "./components/pages/patients-page/patients-page.jsx";
import Header from "./components/imports/header/header.jsx";
import NotFoundPage from "./components/pages/not-found-page/not-found-page.jsx";
import {persistor, store} from "./store/store.js";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import Loading from "./components/loading/loading.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Loading />}>
              <BrowserRouter >
                  <Routes >
                      <Route path='/' element={<Header />} >
                          <Route index element={<App />} />
                          <Route path='/patients' element={<PatientsPage />} />
                      </Route>
                      <Route path='*' element={<NotFoundPage />}/>
                  </Routes>
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </StrictMode>,
)
