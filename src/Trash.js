https://images.unsplash.com/photo-1500917832468-298fa6292e2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7dc310134cdefd68cbb1fc7c6ab2049d&auto=format&fit=crop&w=1500&q=80

/*<div className="checkbox">
          <input type="checkbox" value="1" name="checkbox" />
          <label className="Gender">Ich suche männliche Segelpartner </label>
        </div>*/

        min-height: 350px;
  margin: 23px;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border-radius: 4px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 10px;
  grid-template-areas:
    'image name'
    '. .'
    'about about'
    'contact .';