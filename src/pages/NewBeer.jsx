import { useState } from "react";
import { addBeer } from "../api";
import NavBar from "../components/NavBar";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleTaglineChange(event) {
    setTagline(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleFirstBrewedChange(event) {
    setFirstBrewed(event.target.value);
  }

  function handleBrewersTipsChange(event) {
    setBrewersTips(event.target.value);
  }

  function handleAttenuationLevelChange(event) {
    setAttenuationLevel(event.target.value);
  }

  function handleContributedByChange(event) {
    setContributedBy(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();

    await addBeer({
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    });
  }

  return (
    <div>
      <NavBar />

      <form className="divnewbeer" onSubmit={handleSubmitForm}>
        <label htmlFor="name">New beer name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <p></p>
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          id="tagline"
          value={tagline}
          onChange={handleTaglineChange}
        />
        <p></p>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <p></p>
        <label htmlFor="firstBrewed">First Brewed</label>
        <input
          type="text"
          id="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewedChange}
        />
        <p></p>
        <label htmlFor="brewersTips">Brewers Tips</label>
        <input
          type="text"
          id="brewersTips"
          value={brewersTips}
          onChange={handleBrewersTipsChange}
        />
        <p></p>
        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input
          type="number"
          id="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevelChange}
        />
        <p></p>
        <label htmlFor="contributedBy">Contributed By</label>
        <input
          type="text"
          id="contributedBy"
          value={contributedBy}
          onChange={handleContributedByChange}
        />
        <p></p>
        <button className="buttoncolor" type="submit">
          ADD NEW
        </button>
      </form>
    </div>
  );
}

export default NewBeer;
