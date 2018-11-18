from django.db import models
from localflavor.us.models import USStateField


class County(models.Model):
    name = models.CharField(max_length=100)
    state = USStateField()

    def __str__(self):
        return '{} County, {}'.format(self.name, self.state)
