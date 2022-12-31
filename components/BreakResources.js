class BreakResources extends React.Component {
  state = {
    selectedResource: null,
  };

  handleResourceSelect = (resource) => {
    this.setState({ selectedResource: resource });
  };

  render() {
    return (
      <Container>
        <ResourceList>
          {resources.map(resource => (
            <ResourceItem key={resource.id} onClick={() => this.handleResourceSelect(resource)}>
              <ResourceImage src={resource.imageUrl} />
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
            </ResourceItem>
          ))}
        </ResourceList>
        {this.state.selectedResource && (
          <ResourceModal>
            <ResourceModalContent>
              <ResourceModalHeader>{this.state.selectedResource.title}</ResourceModalHeader>
              <ResourceModalBody>{this.state.selectedResource.content}</ResourceModalBody>
              <ResourceModalFooter>
                <Button onClick={() => this.setState({ selectedResource: null })}>Close</Button>
              </ResourceModalFooter>
            </ResourceModalContent>
          </ResourceModal>
        )}
      </Container>
    );
  }
}

export default BreakResources;