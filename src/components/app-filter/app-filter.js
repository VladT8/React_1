import './app-filter.css';

const AppFilter = () => {
   return (
      <div className="btn-group">
         <button 
            className="btn btn-light"
            type="button">
               "vse sotrudniki"
         </button>
         <button 
            className="btn btn-outline-light"
            type="button">
               "na povyshenie"
         </button>
         <button 
            className="btn btn-outline-light"
            type="button">
               "ZP > 1000$"
         </button>
      </div>
   );
}

export default AppFilter;