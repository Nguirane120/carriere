import React from 'react'

const Accueil = () => {
  return (
    <div className="container">
        <h4>Accueil</h4>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                    <div class="d-flex flex-row mb-3">
  <div>Revenu Mensuel
    <p>775000 <strong>CFA</strong> </p>
  </div>
  
</div>
<div class="d-flex flex-row-reverse">
  <div>
      <h4>Revenu Mensuel</h4>
      <p>440000 <strong>CFA</strong></p>
      <p>440000 <strong>CFA</strong></p>
      <p>440000 <strong>CFA</strong></p>
      <p>440000 <strong>CFA</strong></p>
  </div>
</div>
                    </div>
                </div>
            </div>
            <div className="col-md-6"></div>
        </div>
    </div>
  )
}

export default Accueil