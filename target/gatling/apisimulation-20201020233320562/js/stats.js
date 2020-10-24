var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "601",
        "ok": "601",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "434",
        "ok": "434",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2246",
        "ok": "2246",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "492",
        "ok": "492",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "percentiles1": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "percentiles2": {
        "total": "455",
        "ok": "455",
        "ko": "-"
    },
    "percentiles3": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1785",
        "ok": "1785",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 581,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.852",
        "ok": "9.852",
        "ko": "-"
    }
},
contents: {
"req_get--basic-auth-d021d": {
        type: "REQUEST",
        name: "GET /basic-auth/",
path: "GET /basic-auth/",
pathFormatted: "req_get--basic-auth-d021d",
stats: {
    "name": "GET /basic-auth/",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.016",
        "ok": "0.016",
        "ko": "-"
    }
}
    },"req_get--api-v2-pok-a6e2d": {
        type: "REQUEST",
        name: "GET /api/v2/pokemon/",
path: "GET /api/v2/pokemon/",
pathFormatted: "req_get--api-v2-pok-a6e2d",
stats: {
    "name": "GET /api/v2/pokemon/",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "434",
        "ok": "434",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2246",
        "ok": "2246",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "491",
        "ok": "491",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "percentiles1": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "percentiles2": {
        "total": "454",
        "ok": "454",
        "ko": "-"
    },
    "percentiles3": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1785",
        "ok": "1785",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 581,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.836",
        "ok": "9.836",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
