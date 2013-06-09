JINQ
====

Jinq - Javascript Intergrated Query Language Extensions.
The library works with plain old javascript. No need for jQuery etc. 

The project is still heavily work in progress, so far the following methods have been implemented:
contains: 100%
distinct: 100%
first: 100%
last: 100%
allByType: 100%

The following are expected to be created soon:
where - returns based on comparison criteria
count - counts in different ways e.g. by value
each - as in for each but uses each object rather than index
random - randomises the order of the array
replace - for swapping out on matching value
index - gets the index of first instance
indexes - gets all indexes of matching value
grow - increses size of array
shrink - shrinks size of array
clone - clones the array
remove - removes items from array
any	Returns true if the passed iterator returns a truthy value for any elements in the array.		
clear	Removes all elements from the array.		
collect	Returns the result of applying an iterator to the array.		
compact	Returns a copy of the array with all undefined and null values removed.		
detect	Returns the first element for which the iterator returns a truthy value.		
flatten	Returns a one-dimensional copy of the array.		
grep	Returns all elements for which the passed regex matches.		
inspect	Returns a debug-oriented string representing the array.		
sortBy	Returns an array sorted on the value returned by the iterator.		
zip	"zips" together multiple arrays into a single multi-dimensional array.		