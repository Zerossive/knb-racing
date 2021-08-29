import React, { useEffect, useState } from "react";
import { client } from "../client";
import { useGlobalContext } from "../context";
import Race from "../components/Race";

export default function Races() {
    const generalData = useGlobalContext().generalData;

    const [races, setRaces] = useState([]);
    const [filteredRaces, setFilteredRaces] = useState([]);
    const [showImages, setShowImages] = useState(true);

    useEffect(() => {
        client
            .getEntries({
                content_type: "races",
            })
            .then((response) => {
                const sortedItems = response.items.sort((a, b) => {
                    return a.fields.index - b.fields.index;
                });
                setRaces(sortedItems);
                setFilteredRaces(sortedItems);
            })
            .catch(console.error);
    }, []);

    const searchRaces = (e) => {
        const newRaceList = races.filter((race) => {
            if (
                race.fields.trackName.toUpperCase().includes(e.toUpperCase()) ||
                race.fields.location.toUpperCase().includes(e.toUpperCase()) ||
                race.fields.date.toUpperCase().includes(e.toUpperCase())
            ) {
                return 1;
            }
            return 0;
        });
        setFilteredRaces(newRaceList);
    };

    return (
        <main
            className='bg'
            style={{
                backgroundImage: `url(${
                    generalData.backgroundImage &&
                    generalData.backgroundImage.fields.file.url
                })`,
            }}
        >
            {/* Races v2 */}
            <div
                className='grid-container'
                style={{ justifyContent: "center" }}
            >
                {/* Title */}
                <div className='grid-item w12'>
                    <div className='w4'></div>
                    <h1 className='w4 title underline'>Race History</h1>
                    <div className='w4'></div>
                </div>

                {/* Buttons */}
                {races[0] && (
                    <div className='w12 center-vertical anim-fade'>
                        {/* Show/Hide Images */}
                        <div className='pad m12 center'>
                            <button
                                className='btn'
                                onClick={() => setShowImages(!showImages)}
                            >
                                {showImages ? "hide images" : "show images"}
                            </button>
                        </div>
                        {/* Search */}
                        <div className='pad m12 center'>
                            <input
                                type='text'
                                className='search'
                                placeholder='Search Races'
                                onChange={(e) => {
                                    searchRaces(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* Races (CMS) */}
                {filteredRaces.map((race) => {
                    return (
                        <Race
                            raceData={race.fields}
                            showImages={showImages}
                            key={race.fields.date}
                        />
                    );
                })}
            </div>
        </main>
    );
}
