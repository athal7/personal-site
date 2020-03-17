presentation:
	docker run --rm -t \
		-v `pwd`:/slides \
		astefanutti/decktape \
		/slides/app/assets/$(name).html \
		-s 1024x768 \
		$(name).pdf \
		--slides 1-$(slides)
