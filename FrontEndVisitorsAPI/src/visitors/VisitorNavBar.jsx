import { Route, Routes, Link } from 'react-router-dom'
import AddVisitor from './AddVisitor'
import ViewAllVisitors from './ViewAllVisitors'
import VisitorsDelete from './DeleteVisitors'
import UpdateVisitor from './UpdateVisitor'
import './visitor.css'

export default function VisitorNavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-title">VISITORS API</div>
        <div className="navbar-buttons">
          <button><Link to="/addvisitor">ADD VISITOR</Link></button>
          <button><Link to="/viewallvisitors">VIEW ALL VISITORS</Link></button>
          <button><Link to="/updatevisitor">UPDATE VISITOR</Link></button>
          <button><Link to="/deletevisitor">DELETE VISITOR</Link></button>
        </div>
      </div>
      <Routes>
        <Route path="/addvisitor" element={<AddVisitor />} />
        <Route path="/viewallvisitors" element={<ViewAllVisitors />} />
        <Route path="/deletevisitor" element={<VisitorsDelete />} />
        <Route path="/updatevisitor" element={<UpdateVisitor />} />
      </Routes>
    </div>
      )
}