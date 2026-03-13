import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SlovenianPage } from '@/pages/SlovenianPage'
import { EnglishPage } from '@/pages/EnglishPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<SlovenianPage />} />
          <Route path="/eng" element={<EnglishPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
