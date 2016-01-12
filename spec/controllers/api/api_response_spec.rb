shared_examples_for 'api_response' do
  it 'should succeed' do
    expect(response.status).to eq(200)
  end

  it 'should return a properly formatted JSON packet' do
    expect(json_response).to_not be_nil
  end
end