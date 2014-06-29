"use strict"

#
# Search Controller
#
angular.module("main.home").controller "SearchCtrl", ["$scope", "Expedia"
  ($scope, Expedia) ->

    # Search form object - will get POSTed
    # to API for Hotel List.
    $scope.search = {}

    # Check in and Checkout Calendars.  Uses Angular UI
    # Bootstrap Date Picker
    # http://angular-ui.github.io/bootstrap/#/datepicker
    $scope.today = ->
      $scope.dt = new Date()

    $scope.today()
    $scope.showWeeks = true
    $scope.toggleWeeks = ->
      $scope.showWeeks = not $scope.showWeeks

    $scope.clear = ->
      $scope.search.checkinDt = null
      $scope.search.checkoutDt = null

    $scope.toggleMin = ->
      $scope.minDate = (if ($scope.minDate) then null else new Date())

    $scope.toggleMin()
    $scope.openCheckIn = ($event) ->
      $event.preventDefault()
      $event.stopPropagation()
      $scope.checkInOpened = true

    $scope.openCheckOut = ($event) ->
      $event.preventDefault()
      $event.stopPropagation()
      $scope.checkOutOpened = true

    $scope.dateOptions =
      "year-format": "'yy'"
      "starting-day": 1

    $scope.formats = [
      "dd-MMMM-yyyy"
      "yyyy/MM/dd"
      "M/d/yyyy"
      "shortDate"
    ]
    # Date format required by Expedia API: ie,
    # 6/9/2014
    $scope.format = $scope.formats[2]

    # Uses Angular UI Typeahead
    # http://angular-ui.github.io/bootstrap/#/typeahead
    # Gets locations from Expedia API
    $scope.getLocation = (val) ->
      Expedia.one("geosearch", val).getList().then (data) ->
        locations = []
        locationInfoData = data.LocationInfoResponse.LocationInfos
        if locationInfoData["@size"] > 1
          angular.forEach locationInfoData.LocationInfo, (item) ->
            locations.push {label: "#{ item.city }, #{ item.countryName }", value: item.destinationId}
        else
          locations.push {label: "#{ locationInfoData.LocationInfo.city }, #{ locationInfoData.LocationInfo.countryName.replace('.', '') }", value: locationInfoData.LocationInfo.destinationId}
        locations

    # Rooms array with search inputs
    $scope.search.rooms = [{
      numberOfAdults: 1
      numberOfChildren: 0
      showChildrenAges: false
      ages: []
    }]

    # Adding a new room dynamically creates new inputs.
    # This requires adding height to the search form.
    $scope.addRoom = ->
      $scope.search.rooms.push({
        numberOfAdults: 1
        numberOfChildren: 0
        showChildrenAges: false
        ages: []
      })
      addFormSpace 65

    # Adding children dynamically creates inputs to add
    # ages for children. This requires adding height to
    # the search form.
    $scope.childrenAges = ->
      numberOfChildren = parseInt(this.room.numberOfChildren)
      rowHeight = 85

      this.room.showChildrenAges = true

      if (numberOfChildren > 0)
        for x in [1..numberOfChildren]
          this.room.ages.push({
            age: 'Age'
          })

      # Calculating number of rows
      if _.indexOf([1,2,3], numberOfChildren) isnt -1
        numberOfRows = 1
      else if _.indexOf([4,5], numberOfChildren) isnt -1
        numberOfRows = 2

      # Smaller value is chosen - remove some height
      if @previousChildren > numberOfChildren
        # If set back to zero get rid of all extra height
        if numberOfChildren is 0
          @previousChildren = undefined
          this.room.showChildrenAges = false
          if @previousNumberOfRows is 1
            removeFormSpace rowHeight
          else if @previousNumberOfRows is 2
            removeFormSpace (rowHeight * 2)

        else if numberOfChildren isnt 0
          if @previousNumberOfRows is 2 and numberOfRows is 1
            removeFormSpace rowHeight

      # Larger value is chosen - add some height
      else if @previousChildren < numberOfChildren
        if @previousNumberOfRows is 1 and numberOfRows is 2
          addFormSpace rowHeight
        else if @previousChildren is 0
          if numberOfRows is 1
            addFormSpace rowHeight
          else if numberOfRows is 2
            addFormSpace (rowHeight * 2)

      # Add some height
      else if @previousChildren is undefined
        if numberOfRows is 1
          addFormSpace rowHeight
        else if numberOfRows is 2
          addFormSpace (rowHeight * 2)

      @previousChildren = numberOfChildren
      @previousNumberOfRows = numberOfRows

    $scope.removeRoom = (index) ->
      $scope.search.rooms.splice(index, 1)
      removeFormSpace 65

    # Dynamic search form style values
    $scope.formFooterHeight = 261
    $scope.formContentHeight = 263

    removeFormSpace = (height) ->
      $scope.formContentHeight = $scope.formContentHeight - height
      $scope.formFooterHeight = $scope.formFooterHeight - height

    addFormSpace = (height) ->
      $scope.formContentHeight = $scope.formContentHeight + height
      $scope.formFooterHeight = $scope.formFooterHeight + height

]
