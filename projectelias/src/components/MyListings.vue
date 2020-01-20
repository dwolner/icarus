<template>
    <div id="MyListings">
        <div class="q-pa-xl">
            <div class="row container justify-center">
                <div class="col-12 q-pa-sm">
                    <h3 class="text-white Compass-Serif-Regular q-mb-md">Listings</h3>
                </div>
                <div v-for="item in listings" class="col-xs-12 col-sm-6 col-md-3 q-pa-sm" style="">
                    <!-- <div class="shadow-4 relative-position" :style="`background: url(${ item.media[0].originalUrl }); background-size: cover; background-position: 50%;`"> -->
                    <div class="shadow-4 relative-position" style="height: 100%;">
                        <img :src="item.media[0].originalUrl" style="max-width: 100%;" />
                        <div class="centerHeaderHold">
                            <img
                                v-if="item.overlayFilename"
                                :src="`statics/media/${item.overlayFilename}`"
                                style="height: 100%; width: auto; transform: scale(0.7);"
                            />

                            <div v-else class="centerHeader">
                                <h6
                                    align="center"
                                    class="text-white"
                                    style="margin: 0; letter-spacing: 0.4rem; line-height: 1.5rem;"
                                >{{item.location.prettyAddress}}</h6>
                                <!-- <q-chip v-for="tag in item.tags" @click="selectTag(tag)" small style="margin: .5rem; cursor: pointer;">#{{tag}}</q-chip> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Concierge',

    data() {
        return {
            listings: null,
        }
    },

    methods: {
        getListings(cb) {
            let req = {
                searchQuery: {
                    start: 0,
                    num: 24,
                    sortOrder: 90,
                    listingTypes: [2],
                    agentSearch: true,
                    saleStatuses: [9, 12],
                    geography: 'san_diego',
                    listingDetailsAllowPartialMatch: { 'Agent Name': { listValues: ['richard elias'] } },
                },
                relationTypes: [0]
            }

            this.api.post('/api', req, res => {
                console.log('listing res: ', res)
                cb(res)
            })
        },

        formatListings(res) {
            // this.listings = res.listingRelations.map(listing => {
            //     return listing.listing
            // })

            //TODO: for dev
            this.listings = res.listingRelations.map(listing => {
                return listing.listing
            })

            console.log('listings: ', this.listings)
        }
    },

    created() {
        // this.getListings(res => {
            // this.formatListings(res)
            this.formatListings(dummy)
        // })
    },
}

let dummy = {
    "listingRelations": [
        {
            "listing": {
                "listingIdSHA": "374502227473215457",
                "feedListingId": "374502227473215457",
                "listingType": 2,
                "propertyRecordType": 2,
                "sourceFilters": [
                    0
                ],
                "location": {
                    "prettyAddress": "10347 Julio Place",
                    "streetNumber": "10347",
                    "street": "Julio",
                    "streetType": "Pl",
                    "neighborhood": "Santee",
                    "subNeighborhoods": [
                        "Santee",
                        "San Diego County"
                    ],
                    "city": "Santee",
                    "state": "CA",
                    "zipCode": "92071",
                    "longitude": -116.9652127,
                    "latitude": 32.865765,
                    "geoId": "san_diego",
                    "timezone": "America/Los_Angeles"
                },
                "size": {
                    "bedrooms": 4,
                    "fullBathrooms": 2,
                    "totalBathrooms": 2,
                    "bathrooms": 2,
                    "squareFeet": 1475
                },
                "status": 14,
                "localizedStatus": "Coming Soon",
                "price": {
                    "lastKnown": 594900,
                    "perSquareFoot": 403.3220338983051,
                    "formatted": "$594,900"
                },
                "date": {
                    "updated": 1574435979790
                },
                "buildingInfo": {
                    "buildingIdSHA": "9a9a780f27b6651121e99b008b01b22a5a87f288",
                    "buildingAddress": "10347 Julio Pl",
                    "buildingYearOpened": 1972
                },
                "detailedInfo": {
                    "amenities": [
                        "Attached Garage",
                        "Back Yard",
                        "Below Ground Pool",
                        "Common Outdoor Space",
                        "Private Yard"
                    ],
                    "propertyType": {
                        "masterType": {
                            "GLOBAL": [
                                "Single Family"
                            ]
                        }
                    },
                    "outdoorSpace": [
                        "Back Yard",
                        "Common Outdoor Space",
                        "Private Yard"
                    ]
                },
                "media": [
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/41850bdec112e64abd3fa4c958e9a09961a27876/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/43271fe297d8a3f6a1419834fbc5bc670a8647b1.jpg",
                        "width": 2010,
                        "height": 1340
                    }
                ],
                "dealInfo": {
                    "transactionType": 0
                },
                "isConsumerSearchable": true,
                "isOffMLS": true,
                "userListingCompliance": {
                    "descriptionCompliance": 0
                },
                "databaseSource": {
                    "sourceDisplayName": "Manual",
                    "contributingDatasetList": [
                        "listing_editor_manual"
                    ]
                },
                "pageLink": "/listing/10347-julio-place-santee-ca-92071/374502227473215457/",
                "editable": true
            }
        },
        {
            "listing": {
                "listingIdSHA": "363600591561083905",
                "feedListingId": "363600591561083905",
                "listingType": 2,
                "propertyRecordType": 2,
                "sourceFilters": [
                    0
                ],
                "location": {
                    "prettyAddress": "12234 A Avenue",
                    "streetNumber": "12234",
                    "street": "A",
                    "streetType": "Ave",
                    "neighborhood": "Winter Gardens",
                    "subNeighborhoods": [
                        "Winter Gardens",
                        "San Diego County",
                        "Lakeside"
                    ],
                    "city": "Lakeside",
                    "state": "CA",
                    "zipCode": "92040",
                    "longitude": -116.9275171,
                    "latitude": 32.853007,
                    "geoId": "san_diego",
                    "timezone": "America/Los_Angeles"
                },
                "size": {
                    "bedrooms": 4,
                    "bathrooms": 2,
                    "squareFeet": 1619,
                    "lotSizeInSquareFeet": 19600,
                    "formattedLotSize": "0.45 AC / 19,600 SF"
                },
                "status": 14,
                "localizedStatus": "Coming Soon",
                "price": {
                    "lastKnown": 679900,
                    "perSquareFoot": 419.9505867819642,
                    "formatted": "$679,900"
                },
                "date": {
                    "updated": 1573146217996
                },
                "buildingInfo": {
                    "buildingIdSHA": "f29e670b076063e9986ceff60f44ed6abb64f08c",
                    "buildingAddress": "12234 A Ave",
                    "buildingYearOpened": 1959
                },
                "detailedInfo": {
                    "amenities": [
                        "Attached Garage",
                        "Back Yard",
                        "Barbecue Area",
                        "Below Ground Pool",
                        "Central AC",
                        "Central Heating",
                        "Deck",
                        "Dishwasher",
                        "Fence",
                        "Front Yard",
                        "Open Views",
                        "Panoramic Views"
                    ],
                    "propertyType": {
                        "masterType": {
                            "GLOBAL": [
                                "Single Family"
                            ]
                        }
                    },
                    "outdoorSpace": [
                        "Back Yard",
                        "Barbecue Area",
                        "Deck",
                        "Fence",
                        "Front Yard"
                    ]
                },
                "media": [
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/967978fcfb727c277f513cb993b47dfafa1e1141/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/2f72255abf9f803e6cf0ae8d5df8f4e4c1f2e0ba.jpg",
                        "width": 1586,
                        "height": 1189
                    }
                ],
                "dealInfo": {
                    "transactionType": 0
                },
                "isConsumerSearchable": true,
                "isOffMLS": true,
                "userListingCompliance": {
                    "descriptionCompliance": 0
                },
                "databaseSource": {
                    "sourceDisplayName": "Manual",
                    "contributingDatasetList": [
                        "listing_editor_manual"
                    ]
                },
                "pageLink": "/listing/12234-a-avenue-lakeside-ca-92040/363600591561083905/",
                "editable": true
            }
        },
        {
            "listing": {
                "listingIdSHA": "365684662332315921",
                "feedListingId": "365684662332315921",
                "listingType": 2,
                "propertyRecordType": 2,
                "sourceFilters": [
                    3,
                    2
                ],
                "location": {
                    "prettyAddress": "6155 Estelle Street",
                    "streetNumber": "6155",
                    "street": "Estelle",
                    "streetType": "St",
                    "neighborhood": "Rolando",
                    "subNeighborhoods": [
                        "Rolando",
                        "Mid-City",
                        "San Diego",
                        "San Diego County"
                    ],
                    "city": "San Diego",
                    "state": "CA",
                    "zipCode": "92115",
                    "longitude": -117.0648585,
                    "latitude": 32.7586162,
                    "geoId": "san_diego",
                    "timezone": "America/Los_Angeles"
                },
                "size": {
                    "bedrooms": 4,
                    "fullBathrooms": 2,
                    "totalBathrooms": 2,
                    "bathrooms": 2,
                    "squareFeet": 1376,
                    "lotSizeInSquareFeet": 6000,
                    "formattedLotSize": "0.14 AC / 6,000 SF"
                },
                "status": 0,
                "localizedStatus": "Active",
                "price": {
                    "lastKnown": 639900,
                    "listed": 639900,
                    "charges": [
                        {
                            "chargeAmount": 0,
                            "chargeType": 2
                        }
                    ],
                    "perSquareFoot": 465.0436046511628,
                    "monthlySalesCharges": 0,
                    "monthlySalesChargesInclTaxes": 0,
                    "formatted": "$639,900",
                    "negotiability": 0
                },
                "date": {
                    "listed": 1572591600000,
                    "updated": 1575746523400,
                    "daysOnMarket": 36,
                    "priceStatusUpdated": 1572591600000
                },
                "events": [
                    {
                        "timestamp": 1572591600000,
                        "status": 0,
                        "price": 639900,
                        "source": {
                            "externalSourceName": "san_diego_sandicor",
                            "externalSourceId": "190059565",
                            "sourceDisplayName": "SDMLS"
                        },
                        "feedListingId": "365684662332315921"
                    }
                ],
                "buildingInfo": {
                    "buildingIdSHA": "237615e2839091f4a3d05290421e4641da3dbe69",
                    "buildingAddress": "6155 Estelle St",
                    "buildingYearOpened": 1952
                },
                "detailedInfo": {
                    "amenities": [
                        "Garage",
                        "Parking Included",
                        "Pet Friendly",
                        "Washer / Dryer in Unit"
                    ],
                    "propertyType": {
                        "masterType": {
                            "GLOBAL": [
                                "Single Family"
                            ],
                            "LOCAL_1": [
                                "Residential"
                            ],
                            "LOCAL_2": [
                                "Detached"
                            ]
                        }
                    }
                },
                "media": [
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/fbc5d1a7438efb161c6212288e9db9842dcbe2f7/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/04cca90541c3fda38311534ab4364d332f1feb81_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/86f53efbe15cbe45566a5c42335ce9c61225e2d2/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/710dd1e6ab78cf2be3c2a84cc3894dad0897273f_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/cf4cb8cd3a6162c102dbdd34ec21a6f63aecc2a9/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/2816e26298406605b9be1462ed64c7305b02d675_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/c1b60a1001e08e58e72dbc6970f64e5ca3ac7eff/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/f99d52a4db06098ae75bcea59dd3a9e01dcd6d64_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/691e69b5966ec7125b13f61b61cdd695e2241ee0/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/c07ac51945bcb97f07c818395e9470d8fcdb5c93_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/41b2c32fe94f4515c600e3930a78cb2500950ed2/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/24ee8ebfbda1076b86853a1ce69b2d3414b039bb_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/cefc5f050afe05edb1ec528700f7b1d3bb6537c9/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/02fddbaba286dceecc9ddf9f696e5effd0df7897_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2eaeba4a971fd6cc96d8e37140b03e0e746e2737/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/692968f9f329cba083e69b863827f4891762edd8_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/5a51f0f495dd34c3a3b4d6ebc841ac092b82213e/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/81f1638a457f280e13d683dbe7c9309dded3bce2_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/4299ff2043e727edfff43cea87af54e392c1174e/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/9e402e8ea865b4724a06510f0d86da0d616fb60c_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/eef2fb9253551b40a14c5eb09f344ef3aa71893c/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/25291db9607e07345b5b593d50b3ca6db7e4506e_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/d3d35fda071574b40356c800018d397793ff67a3/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/10013e28691b4d143a900b8c0f64b6fd178f646a_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/07624260a7386c6907e651373e9f1a29ed2462f5/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/d7b0a67fe90dd6fc9a06f1127d6f469ddc6165eb_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/c8d40615cd9e6366e27caffbf419715928589146/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/0f9e92dd505b45170a48504608b2cfd21110709a_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/3e46302160bcf030a174f275ab23a2c80a0d7c39/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/0fb7df37ad8cc949093137142d3e873518299585_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/dfa07ee21e3e8d811a10f99c8cff0fe058082e32/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/11f416d61c30ec512d992917b40fd562713b3d9a_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f6e47e7c9c3365590a5b2880d4c3b33a0fd6d829/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/9a11d3a79f10ba4d3cadba98dbbbd5a800187f6f_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/4c112780cfbf5afd0b55734a2148c23ab9d53d2a/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/dc6f4931d23dd15cab58b6bcaeb82c12f98cbda2_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/8f41a6a5a556c4e7c402730227f3793d57180eff/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/6bed27fb938e0f0fcb0d9f5186e0744bbcb4387c_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/d9929e0f084fc9c4f8383d9e2bc7b7475f6c40a2/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/b295cc02697ba13e714b109d88c8b5ab0f2dea55_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/427037175f9c2a6b06cfad6ced105301307ebe4e/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/d36ed268e2e911a25e7cf8f1aace17390f5520a7_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/9337e9c0c8574d1b186c2cf7e5d65d2ded8cf0c9/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/59a4e8827353c972ff3e8cd0ff92c2a6eade0cd3_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/e052a7438f5c30ff95ba89579844705539e06ac1/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/6a795abccc414b390f0567a40893e2df16a3a9ac_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/3f8c12ccff4ca2e244c91c02754cf5ab2bcb4d19/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/52d7ea40aca6e57aab74db4f8aaa51eb97b8af30_original.jpg",
                        "width": 1024,
                        "height": 767
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f0d5355e7cff89ef354234ea733067d80ea3ca45/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/99a88dada1c7d8a05b6ea34308b3d281d78d4a76_original.jpg",
                        "width": 1024,
                        "height": 767
                    }
                ],
                "dealInfo": {
                    "transactionType": 0,
                    "courtesyOf": "Listing Courtesy of Compass, Richard B. Elias, DRE #01104411; Compass, Christina Battikha, DRE #01983805"
                },
                "isConsumerSearchable": true,
                "isOffMLS": false,
                "userListingCompliance": {
                    "descriptionCompliance": 0
                },
                "externalId": "190059565",
                "databaseSource": {
                    "isPublicRecord": false,
                    "sourceDisplayName": "SDMLS",
                    "contributingDatasetList": [
                        "san_diego_sandicor",
                        "listing_editor_manual"
                    ]
                },
                "pageLink": "/listing/6155-estelle-street-san-diego-ca-92115/365684662332315921/",
                "editable": false
            }
        },
        {
            "listing": {
                "listingIdSHA": "398444834435789457",
                "feedListingId": "398444834435789457",
                "listingType": 2,
                "propertyRecordType": 2,
                "sourceFilters": [
                    3,
                    2
                ],
                "location": {
                    "prettyAddress": "1806 Gamble Lane",
                    "streetNumber": "1806",
                    "street": "Gamble",
                    "streetType": "Ln",
                    "neighborhood": "Felicita",
                    "subNeighborhoods": [
                        "Felicita",
                        "Escondido",
                        "San Diego County"
                    ],
                    "city": "Escondido",
                    "state": "CA",
                    "zipCode": "92029",
                    "longitude": -117.1037934,
                    "latitude": 33.0961587,
                    "geoId": "san_diego",
                    "timezone": "America/Los_Angeles"
                },
                "size": {
                    "bedrooms": 4,
                    "fullBathrooms": 3,
                    "totalBathrooms": 3,
                    "bathrooms": 3,
                    "squareFeet": 2923,
                    "lotSizeInSquareFeet": 15656,
                    "formattedLotSize": "0.36 AC / 15,656 SF"
                },
                "status": 0,
                "localizedStatus": "Active",
                "price": {
                    "lastKnown": 949999,
                    "listed": 949999,
                    "charges": [
                        {
                            "chargeAmount": 0,
                            "chargeType": 2
                        }
                    ],
                    "perSquareFoot": 325.008210742388,
                    "monthlySalesCharges": 0,
                    "monthlySalesChargesInclTaxes": 0,
                    "formatted": "$949,999",
                    "negotiability": 0
                },
                "date": {
                    "listed": 1575619200000,
                    "updated": 1575661701300,
                    "daysOnMarket": 1,
                    "priceStatusUpdated": 1575619200000
                },
                "events": [
                    {
                        "timestamp": 1575619200000,
                        "status": 0,
                        "price": 949999,
                        "source": {
                            "externalSourceName": "san_diego_sandicor",
                            "externalSourceId": "190064184",
                            "sourceDisplayName": "SDMLS"
                        },
                        "feedListingId": "398444834435789457"
                    }
                ],
                "buildingInfo": {
                    "buildingIdSHA": "3da8cbf34121456946c12f2f0c14c36fc0c83b74",
                    "buildingAddress": "1806 Gamble Ln",
                    "buildingYearOpened": 1990
                },
                "detailedInfo": {
                    "amenities": [
                        "Air Conditioning",
                        "Garage",
                        "Laundry in Building",
                        "Parking Included",
                        "Pet Friendly",
                        "Washer / Dryer in Unit"
                    ],
                    "propertyType": {
                        "masterType": {
                            "GLOBAL": [
                                "Single Family"
                            ],
                            "LOCAL_1": [
                                "Residential"
                            ],
                            "LOCAL_2": [
                                "Detached"
                            ]
                        }
                    }
                },
                "media": [
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/8aad8e2104bb7ce87705230cb646dd55c093cd07/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/45ac694a503ebb0aa7a6d541b75dfc9c69fc6736_original.jpg",
                        "width": 1024,
                        "height": 767
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/6b6f34787fe5abf8a39373850c523880e82ea100/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/76fc73ebe5a244cc08bcfb6bf8ed40daabc8a564_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/3ed0bb363b4c5a9de6401dde6fd5d90b14ad5de8/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/74dd6e2b7152116bda25657c0aff88d0f9a4031d_original.jpg",
                        "width": 1024,
                        "height": 767
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/a10014db7578c66e492735df19cd7626dc048e0b/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/46f8bb821b628c7f3043dd27d28ba31c445632ea_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2d0d4a82af27bca7f2c35eaaae9181b17e221ea6/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/8c8b7ce808a2ef2f531d12f18388107e0ccd906b_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2b0be070d2169fe09ed53f9820a68bcb807dfae2/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/78c063d01effdc6e24d03391537105bdb43c7423_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/25af2f12e395d07cbf9494ad80ae72b40b58ee48/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/20adc5a2305576718f0e6363282cb3c8811667d9_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/a62e8e88288e568aedbfe1a676e2a81e19d33b79/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/2730196caac8682d44886c5b763643f6f707e4c3_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/8d7e19ba52e3996ebb8a395d6eda78a7eca4f6b3/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/062255b0fef389e4b4c9cb10d811469a67a55bef_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/662791b50bcabd33aab56df72d3724ee6307bac9/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/c0530c2d2df0e90d129b8659b1ee9b161712a042_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/5319d9a41a1f3e996c252599ba3e939e5e59b550/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/152da06abb42f6a45462ae33deca7338dd67f962_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/54d8f4e034125ae582b00cb19b5fbed1663933ab/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/74a71357d781780a59d6f6036b89da304bb11d95_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/5acb7d67221d5e8ca476c162f9bf306b6300f252/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/a9e4b9bbb99f6d0ba30c01c8b8f4b7ae72a24ec7_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/da3807fccf2d329b94026c330d65db778ec48f3a/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/fdf87096b2cfe4a649d1adc5a5766d5d178f0e47_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f6ecefb94f19148ad43efd855de3853125797d0c/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/b0029b071f7fd0678368671d77aec8f6a9963d51_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/5aca1a904e46d0dbd009bd4eaa0233dbdd95cbcc/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/cbdaf499c89199efaa760c8c7bb4903db0b01132_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2bb8895ba2f3bd3a453556b5c069a94d92f8b28d/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/dac0aea8bd1e0a2e3fef3d8061ba5ec5f69e0b33_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/db5a351b45c41d6fa214629437b6b9adfd3fc3eb/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/793157ebc260d5c2f8813cd3e82bb53e086b94b1_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/4d07abfca2d61c43a3a385d8180e058478c6cbf4/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/41a6635e4b6558edb8aaf09ab5686333c2802aad_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/1fad16fb4732426b2e8b52779e8a99177463e11b/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/18924bf086f4a7a91cc1babd2b71148d989637f3_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/1258a9cfa86f061b5e9c4b3d28f13a90f4332f1f/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/e760258cdecaed22fb77dc8d27610ae55e1aa9ba_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/c434dcdb4c3e99ddbfd378687ca578092f9379bc/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/f358b0f611b48e990a2bfc69a3a9517dfe8623f4_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/9f20004a992ac9b85e736bf9e76de0ec24683518/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/ff419d92bdf3e0058b228b049db52c7ad80e59fe_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/927d37549d9aa1f39680329163227e9d59656acb/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/e580ecf5adc77055ba7bf3a1f0a48231d9f767ab_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/cdf96f3348cd17ad20b371cb687ebe6825aa46d4/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/68ccb0409a522fe1c8b1e75fafd12a22042c9e6a_original.jpg",
                        "width": 1024,
                        "height": 682
                    }
                ],
                "dealInfo": {
                    "transactionType": 0,
                    "courtesyOf": "Listing Courtesy of Compass, Richard B. Elias, DRE #01104411; Compass, Mari Rosas, DRE #02007303"
                },
                "openHouses": [
                    {
                        "startTimeMillis": 1575831600000,
                        "endTimeMillis": 1575842400000,
                        "openHouseType": 0
                    }
                ],
                "isConsumerSearchable": true,
                "isOffMLS": false,
                "userListingCompliance": {
                    "descriptionCompliance": 0
                },
                "externalId": "190064184",
                "databaseSource": {
                    "isPublicRecord": false,
                    "sourceDisplayName": "SDMLS",
                    "contributingDatasetList": [
                        "san_diego_sandicor",
                        "listing_editor_manual"
                    ]
                },
                "pageLink": "/listing/1806-gamble-lane-escondido-ca-92029/398444834435789457/",
                "editable": false
            }
        },
        {
            "listing": {
                "listingIdSHA": "363599195520809217",
                "feedListingId": "363599195520809217",
                "listingType": 2,
                "propertyRecordType": 2,
                "sourceFilters": [
                    3,
                    2
                ],
                "location": {
                    "prettyAddress": "376 San Antonio Avenue, Unit C4",
                    "streetNumber": "376",
                    "street": "San Antonio",
                    "streetType": "Ave",
                    "unitNumber": "C4",
                    "unitType": "Unit",
                    "neighborhood": "La Playa",
                    "subNeighborhoods": [
                        "La Playa",
                        "Point Loma Peninsula",
                        "San Diego",
                        "San Diego County"
                    ],
                    "city": "San Diego",
                    "state": "CA",
                    "zipCode": "92106",
                    "longitude": -117.237711,
                    "latitude": 32.7088846,
                    "geoId": "san_diego",
                    "timezone": "America/Los_Angeles"
                },
                "size": {
                    "bedrooms": 3,
                    "fullBathrooms": 2,
                    "totalBathrooms": 2,
                    "bathrooms": 2,
                    "squareFeet": 1346
                },
                "status": 0,
                "localizedStatus": "Active",
                "price": {
                    "lastKnown": 974900,
                    "listed": 974900,
                    "charges": [
                        {
                            "chargeAmount": 607,
                            "chargeType": 2
                        }
                    ],
                    "perSquareFoot": 724.294205052006,
                    "monthlySalesCharges": 607,
                    "monthlySalesChargesInclTaxes": 607,
                    "formatted": "$974,900",
                    "negotiability": 0
                },
                "date": {
                    "listed": 1574323200000,
                    "updated": 1575610709400,
                    "daysOnMarket": 16,
                    "priceStatusUpdated": 1574323200000
                },
                "events": [
                    {
                        "timestamp": 1574323200000,
                        "status": 0,
                        "price": 974900,
                        "source": {
                            "externalSourceName": "san_diego_sandicor",
                            "externalSourceId": "190062544",
                            "sourceDisplayName": "SDMLS"
                        },
                        "feedListingId": "363599195520809217"
                    }
                ],
                "buildingInfo": {
                    "buildingIdSHA": "ab878c41a084b1994dfb4c3da2bb5ad8cd4a2d8c",
                    "buildingAddress": "376 San Antonio Ave",
                    "buildingUnits": 7,
                    "buildingYearOpened": 1983
                },
                "detailedInfo": {
                    "amenities": [
                        "Air Conditioning",
                        "Elevator",
                        "Garage",
                        "Pet Friendly",
                        "Pool",
                        "Private Outdoor Space",
                        "Washer / Dryer in Unit"
                    ],
                    "propertyType": {
                        "masterType": {
                            "GLOBAL": [
                                "Co-op",
                                "Condo"
                            ],
                            "LOCAL_1": [
                                "Residential"
                            ],
                            "LOCAL_2": [
                                "All Other Attached"
                            ]
                        }
                    },
                    "outdoorSpace": [
                        "Private Outdoor Space"
                    ]
                },
                "media": [
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/6e0c1a368429cdb9c7c646228a00e8fca09ef157/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/e858ef0a1475aa5ef116d7d38ed3debc9d117371_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2b7410ffe89c23d612f12e4ce9386766b9f2215f/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/96b58e38c7c5ce6463c060f715a4ca05e77802a2_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/1fe4018acb9a9868a25e8c4765fe8141011c9026/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/17095afdd0289620b1572b7300e0e04d91f7e171_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/0f6e3ea85dd1a80a0751d0dcc5193c7efb4ed3cc/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/8f723de62755e2196842b33e29d05edab9a14188_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f4b48a039ed624bac55a3ff3fe13ada393597bc1/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/565208bba30b28d984e71616481477e105b85f53_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/821de7697b05115eb9c8fa8fd366211562f1bb35/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/4fa96454d1660cb270a1530ce917aec642c9d202_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/75114f4f1941b75b9a07d8536d8deb45a3be72a5/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/3a345daa7877e01ad0917274f5ec1b57d438ec69_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/148a2c34d1199f1a49a7805e19ff92e4bb05289d/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/d1d10bf499b7714eccfdbe53d3dc0d1f972937e4_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/ca7cb967f890fa54656067b5ef895fc52255b43f/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/7ac9f651f603f19108fdfcdeaddbe9b9ae9cac76_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2ad767e9fe96227527bcf653e20e0e2b6734b3e5/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/43dda122ce4bc26230ec9e7f72c636c57bbc0e03_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/0628d479bf339e3bf2a897c5663563fe6125c892/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/5135bed2cf0d58519d660d7cf279a8260e136929_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/70a41c0be7efa751f198b5526e39540fda280f97/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/05386ecaa971754060c4697f55ae9a015b277b48_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/cfad290da61a3f2b5e62107ecb87c526c5ab6b84/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/edb1d0a7e15c52efb8328d1a35dea092e7f5cae7_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/4489a076098e15233637ead7f9ee777bbe174e07/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/b50705b029ca2b7ec88647845a7496312b88aa1c_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f582b56dfb268376b4096ae53eaf21f54ce286a5/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/69f61f6d47fa2b6bd41b4ab9513071503f2a900e_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/20a903c7018783d99fa0ffb836d429ed9dbac0d2/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/0dfc7ff94d67b8293603c3c0b3ef2f4329dbbc43_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f886a9b2206019e43ca740ba6dbeb33b44ae8384/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/c6efe56d54e69ec18db0db03ace8421c8ecff0f7_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/ad5e14d49125a7e830387c215ad156d8c4159aa2/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/b5489d1d28387049b8b964fc7fc26e49bce35392_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/39b91596b6a714d79d7dbd714f23b6453d7c7906/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/555437cdd36a86795edec5fe5d3c2fad8d8e69e7_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/7899e07f6b59fad73bd6d4f86d975e1fa50653d7/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/8d2646e9421b29623960613f5d08071b78561437_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/7894d1f684731db3a06b14ca52e1d216a6584335/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/05ec861e1b06b68425f86a0ba8bfd2c6bc923118_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/160f95c957afcbd7c1992ffa213cf85117f5f3f3/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/068a7f5b64bce7486a974f724aac54e4d60ade64_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/90f8698c4578aaa0d6913d5212d37a55beaeb997/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/6901c89643f0e05f64fbf287d74a06207ddc8019_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/264b9c5b40174f3c311c2289eda2611e6c79629f/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/7b1a39afef6c756878d7fa09f1220d11e8f017dd_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/ef867825e3ab206cdf2193363d2ee0fd08338af8/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/f6c627c60b8260d0b499caad96e18304b88ffb33_original.jpg",
                        "width": 1024,
                        "height": 682
                    }
                ],
                "dealInfo": {
                    "transactionType": 0,
                    "courtesyOf": "Listing Courtesy of Compass, Richard B. Elias, DRE #01104411"
                },
                "isConsumerSearchable": true,
                "isOffMLS": false,
                "userListingCompliance": {
                    "descriptionCompliance": 0
                },
                "externalId": "190062544",
                "databaseSource": {
                    "isPublicRecord": false,
                    "sourceDisplayName": "SDMLS",
                    "contributingDatasetList": [
                        "san_diego_sandicor",
                        "listing_editor_manual"
                    ]
                },
                "pageLink": "/listing/376-san-antonio-avenue-unit-c4-san-diego-ca-92106/363599195520809217/",
                "editable": false
            }
        },
        {
            "listing": {
                "listingIdSHA": "363602031449127345",
                "feedListingId": "363602031449127345",
                "listingType": 2,
                "propertyRecordType": 2,
                "sourceFilters": [
                    3,
                    2
                ],
                "location": {
                    "prettyAddress": "8940 McKinley Court",
                    "streetNumber": "8940",
                    "street": "McKinley",
                    "streetType": "Ct",
                    "neighborhood": "La Mesa",
                    "subNeighborhoods": [
                        "La Mesa",
                        "San Diego County"
                    ],
                    "city": "La Mesa",
                    "state": "CA",
                    "zipCode": "91941",
                    "longitude": -117.0030395,
                    "latitude": 32.7660903,
                    "geoId": "san_diego",
                    "timezone": "America/Los_Angeles"
                },
                "size": {
                    "bedrooms": 5,
                    "fullBathrooms": 4,
                    "totalBathrooms": 4,
                    "bathrooms": 4,
                    "squareFeet": 3290,
                    "lotSizeInSquareFeet": 6684,
                    "formattedLotSize": "0.15 AC / 6,684 SF"
                },
                "status": 0,
                "localizedStatus": "Active",
                "price": {
                    "lastKnown": 899900,
                    "listed": 899900,
                    "charges": [
                        {
                            "chargeAmount": 258,
                            "chargeType": 2
                        }
                    ],
                    "perSquareFoot": 273.5258358662614,
                    "monthlySalesCharges": 258,
                    "monthlySalesChargesInclTaxes": 258,
                    "formatted": "$899,900",
                    "negotiability": 0
                },
                "date": {
                    "listed": 1573718400000,
                    "updated": 1573756665000,
                    "daysOnMarket": 23,
                    "priceStatusUpdated": 1573718400000
                },
                "events": [
                    {
                        "timestamp": 1573718400000,
                        "status": 0,
                        "price": 899900,
                        "source": {
                            "externalSourceName": "san_diego_sandicor",
                            "externalSourceId": "190061425",
                            "sourceDisplayName": "SDMLS"
                        },
                        "feedListingId": "363602031449127345"
                    }
                ],
                "buildingInfo": {
                    "buildingIdSHA": "821521299641888261e84ce4f09f6dc3c13e9059",
                    "buildingAddress": "8940 Mckinley Ct",
                    "buildingYearOpened": 2014
                },
                "detailedInfo": {
                    "amenities": [
                        "Air Conditioning",
                        "Laundry in Building",
                        "Parking Included",
                        "Pet Friendly",
                        "Washer / Dryer in Unit"
                    ],
                    "propertyType": {
                        "masterType": {
                            "GLOBAL": [
                                "Single Family"
                            ],
                            "LOCAL_1": [
                                "Residential"
                            ],
                            "LOCAL_2": [
                                "Detached"
                            ]
                        }
                    }
                },
                "media": [
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/e14083a1999d3d3c711abfb55f9c4669a2fe3616/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/ef7ca6f54b0c3ca86dce9753945ccc387365f82a_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/242426b0c85edcfa2867c157776f30f7bb028b27/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/066af6e29600aca1e8680485b2eb6004b30d7add_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/bf94f8a9eb09e6da6ed270e657339a61fe35d857/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/84f904ecb7e6642b6c2f944bf52bdf8f479286fe_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/5a006bd68716364c0bf34012c3df29abaab7af92/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/cb060bff4510842b67c29ad995c7df5a189a3270_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/63ee5a19325281e8b9e43acca363aaa9c164978d/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/a35fd709066abb084c2a45142d3ff488001459e6_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/befb022de693642b73b3df28d4d40391385ee312/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/3472004fe2240786ec633caffb9b2041f2cddc1c_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/c777fe83898fa4668e8072a6213e306ae5213d9f/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/bb6819fa2266f4b15e855a812b1208675458bbe7_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/e07cfd7e7b9f9344df11776dce84cab50418bafc/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/ca7ff5a2c8aca1161d47c058ca9ff5fbf7b8839c_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/574cf0116fe885f23263cc20400addd96c736d34/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/cd1987c8b3c2a1a65b088726fb386769bd4d2a91_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/a06ec56dd1b419972c90a62e1bb80970102f40e8/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/323fd90bec29cc1a38be863d2035d4d1299708fd_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/d0f57cebf4257970e4eb4524e2bf7afbb82d77c8/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/197d4b9ee164c17fa68f8f2bb120674afaee06ed_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/b73b477e77878bd84dcfc8445508891bbcf25cbf/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/f644a7e4cc1684ea4cd017d95cadf3ebb6328541_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/5179c0712930cad680df9a2ef5f8599aaa91dfd9/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/fdd04f5ad1b1f44bf317494f6a5afbd2fb4e7465_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/0de92a7bb73a5c1d960c7d5c733587bc5ac77a5c/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/0dbf0b9bfa95f43be5f794e3c57bc78ee45f3d54_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/e51361e6ba762ca7a15632cc2efe1b5df7196169/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/07cef9227390aef213f306b1712b98da6c75b8fd_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/b63886128b3d4288f23e4d43b30aefff91f2df14/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/26f3656fd90414daea6f9f4e2c191b7eebcb2ea4_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/8c358956ee8a593a7800596e5df8db558408ae33/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/6eb9e73c82b15b2619739ba173c10242dac9e060_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/4ea24284a3f543178b404f47fa561cd90c8dbe13/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/523d1103143b0a386325aa42fcc6e02d44515114_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/254a02606917a3a497f530a7813b46f0dcedb447/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/be121aad7db2355866d537b0e7d3de98bf56a0eb_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/ac0e911680f478dd2b966784cde69be31c51875b/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/b0f106768d1b77f13a5b93dbf64d5905b690b975_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/531e1e13c6dc2222da5f195f869077f572602ce4/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/42eb18b03b987ca0a3f00dedfcc614e5eda4780e_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/d4e53e5b04b7322babffc2b7bd3dca079c17dd8c/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/dea78e4622d1abda7602621f85eb315388168e33_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/1ad5d0d3ac85e9fde3efc817afcfefe25081abc2/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/05b361529c977d09c993fd5f9d995aa1774e483b_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/9d1f23cd440a27a2b6aa311290275f4d73f23b90/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/d5c6fa3c5d7820a0cffd5c1c22ec99d0dbbc57f6_original.jpg",
                        "width": 1024,
                        "height": 682
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2cfdfa8d4f5088a794e37f8061f306a2e72c4640/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/c75901c28109c5a0155d488642d41973aa4b7892_original.jpg",
                        "width": 1024,
                        "height": 682
                    }
                ],
                "dealInfo": {
                    "transactionType": 0,
                    "courtesyOf": "Listing Courtesy of Compass, Richard B. Elias, DRE #01104411; Compass, Christina Battikha, DRE #01983805"
                },
                "isConsumerSearchable": true,
                "isOffMLS": false,
                "userListingCompliance": {
                    "descriptionCompliance": 0
                },
                "externalId": "190061425",
                "databaseSource": {
                    "isPublicRecord": false,
                    "sourceDisplayName": "SDMLS",
                    "contributingDatasetList": [
                        "san_diego_sandicor",
                        "listing_editor_manual"
                    ]
                },
                "pageLink": "/listing/8940-mckinley-court-la-mesa-ca-91941/363602031449127345/",
                "editable": false
            }
        },
        {
            "listing": {
                "listingIdSHA": "379645589114378609",
                "feedListingId": "379645589114378609",
                "listingType": 2,
                "propertyRecordType": 2,
                "sourceFilters": [
                    3,
                    2
                ],
                "location": {
                    "prettyAddress": "11580 Fury Lane, Unit 165",
                    "streetNumber": "11580",
                    "street": "Fury",
                    "streetType": "Ln",
                    "unitNumber": "165",
                    "unitType": "Unit",
                    "neighborhood": "Rancho San Diego",
                    "subNeighborhoods": [
                        "Rancho San Diego",
                        "San Diego County",
                        "El Cajon"
                    ],
                    "city": "El Cajon",
                    "state": "CA",
                    "zipCode": "92019",
                    "longitude": -116.9436173,
                    "latitude": 32.7519092,
                    "geoId": "san_diego",
                    "timezone": "America/Los_Angeles"
                },
                "size": {
                    "bedrooms": 2,
                    "fullBathrooms": 2,
                    "totalBathrooms": 2,
                    "bathrooms": 2,
                    "squareFeet": 852
                },
                "status": 0,
                "localizedStatus": "Active",
                "price": {
                    "lastKnown": 317700,
                    "listed": 317700,
                    "charges": [
                        {
                            "chargeAmount": 325,
                            "chargeType": 2
                        }
                    ],
                    "perSquareFoot": 372.88732394366195,
                    "monthlySalesCharges": 325,
                    "monthlySalesChargesInclTaxes": 325,
                    "formatted": "$317,700",
                    "negotiability": 0
                },
                "date": {
                    "listed": 1573027200000,
                    "updated": 1573602914500,
                    "daysOnMarket": 31,
                    "priceStatusUpdated": 1573027200000
                },
                "events": [
                    {
                        "timestamp": 1573027200000,
                        "status": 0,
                        "price": 317700,
                        "source": {
                            "externalSourceName": "san_diego_sandicor",
                            "externalSourceId": "190060183",
                            "sourceDisplayName": "SDMLS"
                        },
                        "feedListingId": "379645589114378609"
                    }
                ],
                "buildingInfo": {
                    "buildingIdSHA": "8d3206fcf75c08b9f4789b960bc299dc7774fb93",
                    "buildingAddress": "11580 Fury Ln",
                    "buildingUnits": 12,
                    "buildingYearOpened": 1988
                },
                "detailedInfo": {
                    "amenities": [
                        "Air Conditioning",
                        "Parking Included",
                        "Pets Conditional",
                        "Pool",
                        "Private Outdoor Space",
                        "Washer / Dryer in Unit"
                    ],
                    "propertyType": {
                        "masterType": {
                            "GLOBAL": [
                                "Condo"
                            ],
                            "LOCAL_1": [
                                "Residential"
                            ],
                            "LOCAL_2": [
                                "All Other Attached"
                            ]
                        }
                    },
                    "outdoorSpace": [
                        "Private Outdoor Space"
                    ]
                },
                "media": [
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/09e0e1f180c00208276bd6de271f1dc5f5d75e8e/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/8ff309cdb0007f8966647d052f62b20767cf1fbd_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/aa4a57b0fb9b2a4aefa07fca51aa0eb8e5fae5fc/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/61be4d370614867b088c976ebf337b8eb87993f1_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/1781c853cfd84e3b6df90812db58f99367b55184/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/c3cf9744cb8e110bf4bf46c58efb5d503b89db80_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f71599416ecf90fa9f357aef798a13c5d226bb4a/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/0356afa0844dcffb73047635f2b811aef4341ce3_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/235298ab8de621628972f7cf7c919ba91d5fc01a/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/a3b9df1600ba55b86aeb0e220f30525f4a5b290c_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/3cc622b10b8ed96792cddfa5d5d98ad670d192a7/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/c8f9ff1c90f78ea401df9bdc7080774f7128ff81_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/88485506d8977e3b01f37850be29a1617c4eaf46/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/faf368c89d15cc9406f26b6487a6bcf1634b7153_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/f911b89aa79aa5223dcfd4b23b581cbffb744745/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/760104d8eb603f958ec50f6314dbc4844dbcacc5_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/68210eaa75b2320cbef05ae0c665222d49305855/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/237229c1fb49c18be3db7d44eaf3c14ed0133d45_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/fbfcf8ee3b4bb3b2c210e4177678d1209f2fc181/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/8883b4f1ca0783c5f0fa7d00716fd5fcde55ddfa_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/6053c72d8791959444d88d81fb93c33d0470bef9/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/16b7261d8c74bd09b3f47aec4a882d4e1e1d0d1a_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/3e1046172e5f822fc93a721dffcb2a0114383fae/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/531d882cc46ac2b2cca27d690ca351e92eec569f_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/baa1531bc26ad0ba819f7d27a0f50a5ac18b6f22/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/614d647d5e83e5d2ede9ec69589af41ec893028f_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/1049587710e2fa42983add1cd7c1820a266d4f81/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/c5033dfd41a662b14fa603f8ef8d591e5e51fe12_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/a11ab8e726889e4f8a080dad72da48ab68c5ee6c/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/d96fc5ca91b84f1ee64b8d7f1a79acbb5ed195c7_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/e36f6572e8077465766d356938cf2ca7c0c02996/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/7868ba08ee6c9610c226beb2c6d2e7d958e6bd59_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/efebdfb8e17e302fa79cdcb4141cda4d980d43fa/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/27057c206706ddd12919dc06d76c30b2e5400e16_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/fe5170c257a911fc6367ee4dba36bbdc3821a0de/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/f8f91e7f50d4a18b128808c3af8954b50dd87c04_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/7003a8cac066b37bcbd30bc8094cd037fb1f902d/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/3a236a9be31d17115accc9349cb06424ac2addab_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/eec467798a286b9bf8e52b96b040ecd408c6b369/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/bc1608e7cfd2c138f6472b54ea86f0155671c017_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/2cf87a71bf5ca09cf46f706a16145fd40cc5ce7f/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/a8ad7a30347ff4be68d1cbe114e12f924cd9ae27_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/761c641dd26564354e66d8c5e15ba65c958488b5/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/62f49d3953d6b75b68c4571b6a32385f1a2b1978_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/c9e913092ae6b7985d4bd14a409867df7844d3ee/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/862a135acad3ef987173e3ba8f6f32dfde193e35_original.jpg",
                        "width": 1024,
                        "height": 683
                    },
                    {
                        "category": 0,
                        "thumbnailUrl": "https://d2787ndpv5cwhz.cloudfront.net/96a03364d447d56ba1982768a9bda5f0c493a617/165x165.jpg",
                        "originalUrl": "https://d2787ndpv5cwhz.cloudfront.net/ac181ae762fce4715c8aeafade61b0cbf4de94b1_original.jpg",
                        "width": 1024,
                        "height": 683
                    }
                ],
                "dealInfo": {
                    "transactionType": 0,
                    "courtesyOf": "Listing Courtesy of Compass, Richard B. Elias, DRE #01104411"
                },
                "isConsumerSearchable": true,
                "isOffMLS": false,
                "userListingCompliance": {
                    "descriptionCompliance": 0
                },
                "externalId": "190060183",
                "databaseSource": {
                    "isPublicRecord": false,
                    "sourceDisplayName": "SDMLS",
                    "contributingDatasetList": [
                        "san_diego_sandicor"
                    ]
                },
                "pageLink": "/listing/11580-fury-lane-unit-165-el-cajon-ca-92019/379645589114378609/",
                "editable": false
            }
        }
    ],
    "totalNumResults": 7,
    "totalResultsNotShownToLoggedOutUser": 0
}
</script>

<style scoped>
    #MyListings {
        width: 100%;
        /* min-height: 100vh; */
        background: #080808;
        position: relative;
        overflow: hidden;
    }

    .container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .centerHeaderHold {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
        -webkit-transition: background 0.5s, opacity 0.5s;
        transition: background 0.5s, opacity 0.5s;
    }

    .centerHeader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%;
        padding: 1rem;
    }

    .centerHeaderHold:hover {
        opacity: 0;
    }
</style>
